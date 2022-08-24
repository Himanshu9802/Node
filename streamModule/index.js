const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {

  const rstream = fs.createReadStream("input.txt");

  // First 
//   rstream.on("data", (chunkdata) => {
//     res.write(chunkdata);
//   });

//   rstream.on("end", () => {
//     res.end();
//   });

//   rstream.on('error',(err)=>{
//     console.log(err);
//     res.end('File does not exist');
//   });

  // Second
  rstream.pipe(res)
});

server.listen(3000, "127.0.0.1");
