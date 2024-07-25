const Post = require('../models/Post')

const adminLayout = '../views/layouts/admin'

exports.getAdminPage = async (req,res)=> {
    const locals = {
        title: "Admin",
        description: "Simple Blog created with NodeJs, Express & MongoDb",
        currentRoute: '/admin'  
    }
    res.render('admin/index', { locals, layout: adminLayout })
}

exports.getDashboard = async (req, res) => {
    console.log("Dashboard Route: Accessed by user", req.userId)
    try {
        const locals = {
            title: "Dashboard",
            description: "Simple Blog created with NodeJs, Express & MongoDb",
            currentRoute: '/dashboard'
        }
        const data = await Post.find()
        res.render('admin/dashboard', {
            locals,
            data,
            layout: adminLayout
        })
    } catch (error) {
        console.log("Dashboard Route: Error", error)
        res.status(500).send('Internal Server Error')
    }
}
exports.getAddPostPage = (req, res) => {
    res.render('admin/add-post', { layout: '../views/layouts/admin' })
}
