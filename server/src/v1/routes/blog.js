const router = require('express').Router()
const { param } = require('express-validator')
const validation = require('../handlers/validation')
const tokenHandler = require('../handlers/tokenHandler')
const blogController = require('../controllers/blog')

router.post(
  '/',
  validation.validate,
  tokenHandler.verifyToken,
  blogController.create
)

router.delete(
  '/:blogId',
  param('blogId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid section id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken, 
  blogController.delete
)

router.put(
  '/:blogId',
  param('blogId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid section id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken, 
  blogController.update
)
router.get(
  '/',
  blogController.getAll
)
  module.exports = router