const Post = require('../models/Post')
const adminLayout = '../views/layouts/admin'

exports.getAllPosts = async (req, res) => {
    try {
        const locals = {
          title: "NodeJs Blog",
          description: "Simple Blog created with NodeJs, Express & MongoDb.",
          currentRoute:'/'
        }
    
        let perPage = 6
        let page = req.query.page || 1
    
        const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec()
    

        const count = await Post.countDocuments({})
        const nextPage = parseInt(page) + 1
        const hasNextPage = nextPage <= Math.ceil(count / perPage)
    
        res.render('index', { 
          locals,
          data,
          current: page,
          nextPage: hasNextPage ? nextPage : null,
          currentRoute: '/'
        })
    
      } catch (error) {
        console.log(error)
      }
}


exports.getPostById = async (req, res) => {
    try {
        const locals = {
          title: "Edit Post",
          description: "Free NodeJs User Management System",
          currentRoute:'/post/'+req.params.id
        }
    
    const data = await Post.findOne({ _id: req.params.id })
    if(req.userRole === 'admin'){
        res.render('admin/edit-post', {
          locals,
          data,
          layout: adminLayout
        })
    }else{
        res.render('post', {
            locals,
            data
        })
    }
    
      } catch (error) {
        console.log(error)
      }
    
}

exports.searchPosts = async (req, res) => {
    try {
        const locals = {
            title: "Search",
            description: "Simple Blog created with NodeJs, Express & MongoDb"
        }

        let searchTerm = req.body.searchTerm
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "")

        const data = await Post.find({
            $or: [
                { title: { $regex: new RegExp(searchNoSpecialChar, 'i') } },
                { body: { $regex: new RegExp(searchNoSpecialChar, 'i') } }
            ]
        })

        res.render("search", {
            data,
            locals,
            currentRoute: '/search'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
}

// Add, edit, and delete post controllers (similar to the above structure)
exports.addPost = async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            body: req.body.body
        })

        await Post.create(newPost)
        res.redirect('/dashboard')
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
}

exports.editPost = async (req, res) => {
    try {

        await Post.findByIdAndUpdate(req.params.id, {
          title: req.body.title,
          body: req.body.body,
          updatedAt: Date.now()
        })
    
        res.redirect('/dashboard')
    
      } catch (error) {
        console.log(error)
      }
}

exports.deletePost = async (req, res) => {
    try {
        await Post.deleteOne({ _id: req.params.id })
        res.redirect('/dashboard')
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
}
