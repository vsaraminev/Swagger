const express = require('express')
const authCheck = require('../middleware/auth-check');
const Part = require('../models/Part');
const constants = require('../util/constants');

const router = new express.Router()

function validatePartForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.year = parseInt(payload.year)
  payload.price = parseInt(payload.price)

  if (!payload || typeof payload.title !== 'string' || payload.title.length < 3) {
    isFormValid = false
    errors.make = 'Title must be more than 3 symbols.'
  }

  if (!payload || typeof payload.model !== 'string' || payload.model.length < 3) {
    isFormValid = false
    errors.model = constants.validatePartForm.model
  }

  if (!payload || !payload.year || payload.year < 1950 || payload.year > 2050) {
    isFormValid = false
    errors.year = constants.validatePartForm.year
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10) {
    isFormValid = false
    errors.description = constants.validatePartForm.description
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false
    errors.price = constants.validatePartForm.price
  }

  if (!payload || typeof payload.image !== 'string' || payload.image.length === 0) {
    isFormValid = false
    errors.image = constants.validatePartForm.image
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
  const part = req.body

  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = decodeToken(token);
  const userRoles = decodedToken.role;

  const validationResult = validatePartForm(part)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  if (!userRoles.includes(constants.adminRole)) {
    return res.status(403).json({
      success: false,
      message: constants.unAuthorized
    })
  }

  Part.create(part)
    .then((data) => {
      res.status(200).json({
        success: true,
        message: 'Part added successfully.',
        part: data
      })
    })
})

router.get('/all', (req, res) => {
  Part.find({})
    .then((part) => {
      return res.status(200).json(part)
    })
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  Part.findById(id)
    .then((part) => {
      if (!part) {
        return res.status(404).json({
          success: false,
          message: constants.partMess.notExists
        })
      }

      let response = {
        id,
        title: part.title,
        model: part.model,
        year: part.year,
        description: part.description,
        price: part.price,
        image: part.image,
      }

      res.status(200).json(response)
    })
})

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = decodeToken(token);
  const userRoles = decodedToken.role;

  Part.findById(id)
    .then((part) => {
      if (!part) {
        return res.status(200).json({
          success: false,
          message: constants.partMess.notExists
        })
      }

      if (!userRoles.includes(constants.adminRole)) {
        return res.status(403).json({
          success: false,
          message: constants.unAuthorized
        })
      }

      Part.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: constants.partMess.deleted
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const part = req.body;

  if (!part) {
    return res.status(404).json({
      success: false,
      message: constants.partMess.notExists
    })
  }

  if (!req.user.roles.includes(constants.adminRole)) {
    return res.status(403).json({
      success: false,
      message: constants.unAuthorized
    })
  }

  const validationResult = validatePartForm(part)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Part.findByIdAndUpdate(id, part)
    .then(() => {
      return res.status(200).json({
        id,
        success: true,
        message: constants.partMess.edit
      })
    })
})

module.exports = router
