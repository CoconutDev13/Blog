const express = require('express')
const UserController = require('../controllers/UserController')
const authMiddleware = require('../../../middlewares/auth')

const router = express.Router()

router.post('/signup', UserController.signup)
router.post('/login', UserController.login)
router.post('/logout', authMiddleware, UserController.logout)
router.put('/setbio', authMiddleware, UserController.setBio)

module.exports = router