const express = require('express')
const PostController = require('../controllers/PostController')
const authMiddle = require('../../../middlewares/auth')
const router = express.Router()

router.post('/create', authMiddle, PostController.create)

module.exports = router