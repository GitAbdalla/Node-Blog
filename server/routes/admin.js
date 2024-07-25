const express = require('express')
const router = express.Router()
const adminController = require('../Controllers/adminController')
const postController = require('../Controllers/postController')
const authController = require('../Controllers/authController')
const { authMiddleWare, checkAdminRole } = require('../middlewares/authMiddleware')
const Post = require('../models/Post') 
const adminLayout = '../views/layouts/admin'

/**
 * Admin Routes
 */
router.get('/admin', adminController.getAdminPage)
router.post('/admin', authController.checkLogin)
router.get('/dashboard', authMiddleWare , checkAdminRole,adminController.getDashboard)

router.get('/add-post', authMiddleWare,checkAdminRole,adminController.getAddPostPage)
router.post('/add-post', authMiddleWare,checkAdminRole, postController.addPost)
router.get('/edit-post/:id', authMiddleWare,checkAdminRole, postController.getPostById)
router.put('/edit-post/:id', authMiddleWare, checkAdminRole,postController.editPost)
router.delete('/delete-post/:id', authMiddleWare,checkAdminRole, postController.deletePost)


router.post('/register', authController.register)
router.get('/logout', authController.logout)

module.exports = router
