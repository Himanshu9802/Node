// The http.createServer() method includes request and response parameters which is supplied nOde.js

// The request object can be used to get information about the current HTTP request 
// e.g. url, request header, and data.

// the response object can be used to send a response for a current HTTP request.

// If the reponse from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type.


const http = require('http')
const fs = require('fs')

const data = fs.readFileSync(`${__dirname}/API/user.json`,'utf-8')

const server = http.createServer((req, res )=>{
    if(req.url == "/"){
        res.end('Home');
    }else if (req.url == "/about"){
        res.end("About")
    }else if (req.url == "/user"){
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(data)
    }else{
        res.writeHead(404)
        res.end('404 Not found')
    }
});

server.listen(2000,"127.0.0.1", () => {
    console.log('listening to the port no 2000');
});