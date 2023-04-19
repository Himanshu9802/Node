const fs = require('fs')
const http = require('http')

const server = http.createServer();

server.on('request', (req, res)=>{
    const rsteam = fs.createReadStream('inpugt.txt')

    rsteam.on('data', (chunkdata)=>{
        res.write(chunkdata);
    })

    rsteam.on('end', ()=>{
        res.end()
    })

    rsteam.on('error', ()=> {
        res.writeHead(404,'Nai mili',{'Content-type': 'text/html'})
        res.end('404 file not found')
    })
})

server.listen(2000, '0.0.0.0')