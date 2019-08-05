const express = require('express')
const passport = require('passport')
const validator = require('validator')
const constants = require('../util/constants')


const router = new express.Router()

function validateSignupForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false
    errors.email = constants.validateFormErr.email
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 4) {
    isFormValid = false
    errors.password = constants.validateFormErr.password
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false
    errors.name = constants.validateFormErr.name
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

function validateLoginForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false
    errors.email = constants.validateFormErr.email
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false
    errors.password = constants.validateFormErr.password
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

router.post('/register', (req, res, next) => {
  const validationResult = validateSignupForm(req.body)
  if (!validationResult.success) {
    return res.status(401).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  return passport.authenticate('local-signup', (err) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: err
      })
    }

    return res.status(200).json({
      success: true,
      message: constants.successSignedUp
    })
  })(req, res, next)
})

router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body)
  if (!validationResult.success) {
    return res.status(401).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === constants.incorrectCredentialsError) {
        console.log(constants.invalidCredentials);
        return res.status(401).json({
          success: false,
          message: err.message
        })
      }

      return res.status(401).json({
        success: false,
        message: constants.couldNotProccesForm
      })
    }
    
    return res.json({
      success: true,
      message: constants.successLoggedIn,
      token
      //user: userData
    })
  })(req, res, next)
})

module.exports = router
