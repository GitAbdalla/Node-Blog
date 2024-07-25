const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWTSECRET

exports.authMiddleWare = (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    try {
        const decoded = jwt.verify(token, jwtSecret)
        req.userId = decoded.userId
        req.userRole = decoded.role
        next()
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" })
    }
}

exports.checkAdminRole = (req, res, next) => {
    if (req.userRole !== 'admin') {
        return res.status(403).json({ message: "Forbidden" })
    }
    next()
}
