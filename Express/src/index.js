const path = require('path')
const express = require('express')
const app = express()

const staticPath = (path.join(__dirname, '../public'))

// buil-in middleware
app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.send('Express Home')
})

app.get('/about',(req,res)=>{
    res.status(200).send('Express About')
})

app.get('/contact',(req,res)=>{
    res.send('Express Contact')
})

app.listen(2000,()=>{
    console.log('@2000');
})