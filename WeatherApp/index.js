const http = require('http');
const fs = require('fs');
var requests = require('requrests');

const homefile = fs.readFileSync("home.html",'utf-8');

const replaceVal = (tempVal, orgVal) =>{
    let temprature = tempVal.replace("{%tempVal%", orgVal.main.temp);
    temprature = tempVal.replace("{%tempMin%", orgVal.main.temp_min);
    temprature = tempVal.replace("{%tempMax%", orgVal.main.temp_max);

    temprature = tempVal.replace("{%location%", orgVal.main.country);
    temprature = tempVal.replace("{%country%", orgVal.main.temp);
}

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        requests('https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid=d6246d71efb3126487d0d3e72ad05144',{streaming})
        .on('data',(chunk)=>{
            const objData = JSON.parse(chunk);
            const arrData = [objData];
            console.log(arrData[0].main.temp);

            const realData = arrData.map((val)=>{
                replaceVal(homefile, val);
            })
        })
        .on('end', (err)=>{
            if (err) return console.log('connection closed due to errors', err);
            console.log('end');
        });
    }
});

server.listen(1000,'127.0.0.1');