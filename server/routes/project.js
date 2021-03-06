const express = require('express')
const authCheck = require('../middleware/auth-check');
const Project = require('../models/Project');
const constants = require('../util/constants');

const router = new express.Router()

function validateProjectForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.year = parseInt(payload.year)

  if (!payload || typeof payload.title !== 'string' || payload.title.length < 3) {
    isFormValid = false
    errors.title = constants.validateProjectForm.title
  }

  if (!payload || typeof payload.model !== 'string' || payload.model.length < 3) {
    isFormValid = false
    errors.model = constants.validateProjectForm.model
  }

  if (!payload || !payload.year || payload.year < 1920 || payload.year > 2019) {
    isFormValid = false
    errors.year = constants.validateProjectForm.year
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10) {
    isFormValid = false
    errors.description = constants.validateProjectForm.description
  }

  if (!payload || typeof payload.image !== 'string' || payload.image.length === 0) {
    isFormValid = false
    errors.image = constants.validateProjectForm.image
  }

  if (!isFormValid) {
    message = constants.formErrors
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

function decodeToken(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const buff = new Buffer(base64, 'base64');
  const payloadinit = buff.toString('ascii');

  return payload = JSON.parse(payloadinit);
}

router.post('/create', authCheck, (req, res) => {
  const project = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = decodeToken(token);
  project.creator = decodedToken.sub;

  const validationResult = validateProjectForm(project)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Project.create(project)
    .then((data) => {
      res.status(200).json({
        success: true,
        message: constants.projectMess.add,
        project: data
      })
    })
})

router.get('/all', authCheck, (req, res) => {

  Project.find({})
    .then((project) => {
      return res.status(200).json(project)
    })
})

router.get('/details/:id', (req, res) => {
  const id = req.params.id
  Project.findById(id)
    .populate('creator')
    .then((project) => {
      if (!project) {
        return res.status(404).json({
          success: false,
          message: constants.projectMess.notExists
        })
      }

      let response = {
        id: project._id,
        title: project.title,
        model: project.model,
        year: project.year,
        description: project.description,
        image: project.image,
        creator: project.creator
      }

      return res.status(200).json(response)
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = decodeToken(token);
  const user = decodedToken.sub;
  const userRoles = decodedToken.role;

  Project.findById(id)
    .then((project) => {
      if (!project) {
        return res.status(200).json({
          success: false,
          message: constants.projectMess.notExists
        })
      }

      if ((project.creator.toString() != user && !userRoles.includes(constants.adminRole))) {
        return res.status(403).json({
          success: false,
          message: constants.unAuthorized
        })
      }

      Project.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: constants.projectMess.deleted
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const project = req.body;

  if (!project) {
    return res.status(404).json({
      success: false,
      message: constants.projectMess.notExists
    })
  }

  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = decodeToken(token);
  const userRoles = decodedToken.role;

  if (!userRoles.includes(constants.adminRole)) {
    return res.status(403).json({
      success: false,
      message: constants.unAuthorized
    })
  }

  const validationResult = validateProjectForm(project)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Project.findByIdAndUpdate(id, project)
    .then(() => {
      return res.status(200).json({
        id,
        success: true,
        message: constants.projectMess.edited
      })
    })
})

module.exports = router
