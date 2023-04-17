const express = require('express');
const bodyParser = require('body-parser');

// instance of express
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

// routing
app.get('/',(req, res)=>{
    res.send('Welcome to express')
})
app.get('/about',(req, res)=>{
    res.send('Express about')
})
app.get('/contact',(req, res)=>{
    res.send('Express contact')
})

app.get('/calculator', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/calculator', (req,res)=>{
    let {v1,v2} = req.body;

    let sum = Number(v1) + Number(v2);

    res.send(`addition of numbers is ${sum}`)
})

// creating server
app.listen(2000, (req, res)=>{
    console.log('Server is runing @2000');
})