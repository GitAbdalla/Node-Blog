const mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique : true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})
module.exports = mongoose.model('User', UserSchema)