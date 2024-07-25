const Post = require('../models/Post')

const adminLayout = '../views/layouts/admin'

exports.getAdminPage = async (req,res)=> {
  try {
        // Fetch posts or any required data
        const posts = await Post.find();

        const locals = {
            title: "Admin",
            description: "Simple Blog created with NodeJs, Express & MongoDb",
            currentRoute: '/'  
        };

        // Pass data to the view
        res.render('admin/index', { locals, data: posts, layout: adminLayout });
    } catch (error) {
        console.log("Error fetching posts:", error);
        res.status(500).send('Internal Server Error');
    }
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
