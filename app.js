require('dotenv').config()
const express = require ('express')
const expressLayout = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')
const session = require('express-session')
const methodOverRide = require('method-override')
const flash = require('connect-flash')

const connectDB = require('./server/config/db')
// const MongoStore = require('connect-mongo')
const { isActiveRoute} = require('./server/helpers/routeHelpers')
const app = express()
const PORT = 4000 || process.env.PORT

connectDB()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use(methodOverRide('_method'))
app.use(flash())



app.locals.isActiveRoute = isActiveRoute


app.use(session ({
    secret :'keyboard cat',
    resave: false ,
    saveUninitialized :true ,
    store:MongoStore.create({
        mongoUrl:process.env.MONGODB_URI
    })

}))
app.use((req, res, next)=>{
    res.locals.successMessage = req.flash('successMessage')
    res.locals.errorMessage = req.flash('errorMessage')
    next()
})

app.use(express.static('public'))


// Template Engine
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')


app.use('/home' ,require('./server/routes/main'))
app.use('/' ,require('./server/routes/admin'))

app.listen(PORT, ()=>{
    console.log(`App listning on http:localhost:port${PORT}`)
})