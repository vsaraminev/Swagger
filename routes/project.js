const express = require('express')
const authCheck = require('../middleware/auth-check');
const Project = require('../models/Project');

const router = new express.Router()

function validateProjectForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.year = parseInt(payload.year)

  if (!payload || typeof payload.title !== 'string' || payload.title.length < 3) {
    isFormValid = false
    errors.title = 'Title must be more than 3 symbols.'
  }

  if (!payload || typeof payload.model !== 'string' || payload.model.length < 3) {
    isFormValid = false
    errors.model = 'Model must be more than 3 symbols.'
  }

  if (!payload || !payload.year || payload.year < 1920 || payload.year > 2019) {
    isFormValid = false
    errors.year = 'Year must be between 1920 and 2019.'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10) {
    isFormValid = false
    errors.description = 'Description must be more than 10 symbols.'
  }

  if (!payload || typeof payload.image !== 'string' || payload.image.length === 0) {
    isFormValid = false
    errors.image = 'Image URL is required.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
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

router.post('/create', (req, res) => {
  const project = req.body;
  // const token = req.headers.authorization.split(' ')[1];
  // const decodedToken = decodeToken(token);
  // project.creator = decodedToken.sub;

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
        message: 'Project added successfully.',
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

router.get('/details/:id',  (req, res) => {
  const id = req.params.id
  Project.findById(id)
    .populate('creator')
    .then((project) => {
      if (!project) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: project.title,
        model: project.model,
        year: project.year,
        description: project.description,
        image: project.image,
        creator: project.creator
      }

      res.status(200).json(response)
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
          message: 'Project does not exists!'
        })
      }

      if ((project.creator.toString() != user && !userRoles.includes("Admin"))) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized!'
        })
      }

      Project.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Project deleted successfully!'
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
      message: 'Project does not exists!'
    })
  }

  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = decodeToken(token);
  const userRoles = decodedToken.role;

  if (!userRoles.includes('Admin')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized!'
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
        success: true,
        message: 'Project edited successfully!'
      })
    })
})

module.exports = router
