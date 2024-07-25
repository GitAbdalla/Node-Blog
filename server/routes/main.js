const express = require('express')
const router = express.Router()
const postController = require('../Controllers/postController')


//Main Routes
router.get('/', postController.getAllPosts)
router.get('/post/:id', postController.getPostById)
router.post('/search', postController.searchPosts)


// Static Pages
router.get('/about', (req, res) => {
    res.render('about', { currentRoute: '/about' })
})
router.get('/contact', (req, res) => {
    res.render('contact', { currentRoute: '/contact' })
})
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`)
    res.redirect('/contact')
})

module.exports = router
