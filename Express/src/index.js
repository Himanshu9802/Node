const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')

const staticPath = (path.join(__dirname, '../public'))
const screensPath = (path.join(__dirname, './screens/views'))
const partialsPath = (path.join(__dirname, './screens/partials'))

// buil-in middleware
// app.use(express.static(staticPath))

// set the view engine
app.set('view engine', "hbs")
// changing views name
app.set('views',screensPath)
hbs.registerPartials(partialsPath)

// template engine route
app.get("",(req, res)=>{
    res.render('index', {name: "Himanshu"})
})

app.get('/abt',(req,res)=>{
    res.render('about')
})

app.get('/',(req,res)=>{
    res.send('Express Home')
})

app.get('/about',(req,res)=>{
    res.status(200).send('Express About')
})

app.get('/contact',(req,res)=>{
    res.send('Express Contact')
})

app.get('*',(req, res)=>{
    res.render('404')
})

app.listen(2000,()=>{
    console.log('@2000');
})