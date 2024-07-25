const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { authMiddleWare, checkAdminRole } = require('../middlewares/authMiddleware')
const jwtSecret = process.env.JWTSECRET


exports.checkLogin = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })

        if (!user) {
            req.flash('errorMessage','Invalid credentials')
            return res.redirect('/')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            req.flash('errorMessage','Invalid credentials')
            return res.redirect('/')
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, jwtSecret)
        res.cookie('token', token, { httpOnly: true })

        if (user.role === "admin") {
            res.redirect('/dashboard')
        } else {
            res.redirect('/home')
        }
    } catch (error) {
        console.log(error)
        req.flash('errorMessage','Internal Server Error')
        return res.redirect('/')
    }
}

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body

        if (!username || !password) {
            req.flash('errorMessage', 'Username or Password required')
            return res.redirect('/')
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        try {
            const user = await User.create({ username, password: hashedPassword })
            req.flash('successMessage', 'User Created Successfully')
            return res.redirect('/')
        } catch (error) {
            if (error.code === 11000) {
                req.flash('errorMessage', 'User already exists')
                return res.redirect('/')
            }
            req.flash('errorMessage', 'Internal server error')
            return res.redirect('/')
        }
    } catch (error) {
        console.log(error)
        req.flash('errorMessage', 'Internal Server Error')
        return res.redirect('/')
    }
}



exports.logout = (req, res) => {
    res.clearCookie('token')
    res.redirect('/')
}

