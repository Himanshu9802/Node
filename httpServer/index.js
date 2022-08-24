// -> The http.createServer() method includes request and response parameters which is supplied by Node.js

// -> The request object can be used to get information about the current HTTP request
// e.g., url, request header, and data

// -> The response object can be used to send a response for a current HTTP request.

// -> If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type

const http = require("http");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/userAPI/userapi.json`, "utf-8");
const objData = JSON.parse(data);

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url == "/") {
    console.log("Home Page");
    res.end("Home Page");
  } else if (req.url == "/about") {
    console.log("About Page");
    res.end("About");
  } else if (req.url == "/user") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<strong>404 Page Not Found</strong>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
