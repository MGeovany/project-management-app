const router = require('express').Router()
const { param } = require('express-validator')
const validation = require('../handlers/validation')
const tokenHandler = require('../handlers/tokenHandler')
const blogController = require('../controllers/blog')

router.post(
  '/',
  //validation.validate,
  //tokenHandler.verifyToken,
  blogController.create
)
  module.exports = router