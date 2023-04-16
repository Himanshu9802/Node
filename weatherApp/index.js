const http = require('http')
const fs = require('fs')
var requests = require('requests')

const homeFile = fs.readFileSync('home.html','utf-8')

var tempConversion = (fTemp) =>{
    return  5/9 * (fTemp - 32)
} 

const replaceVal = (tempVal, orgVal) =>{
    let temperature = tempVal.replace("{%tempVal%}", tempConversion(orgVal.main.temp))
    temperature = temperature.replace("{%tempMin%}", tempConversion(orgVal.main.temp_min))
    temperature = temperature.replace("{%tempMax%}", tempConversion(orgVal.main.temp_max))
    temperature = temperature.replace("{%location%}", tempConversion(orgVal.name))
    temperature = temperature.replace("{%country%}", tempConversion(orgVal.sys.country))
    temperature = temperature.replace("{%tempstatus%}", tempConversion(orgVal.weather[0].main))
    return temperature
}
    
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        requests('https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid=d6246d71efb3126487d0d3e72ad05144')
        .on('data',  (chunk) => {
          const objData = JSON.parse(chunk);
          const arrData = [objData]
        //   console.log(arrData[0].main.temp);
        const realTimeData = arrData.map((val)=> replaceVal(homeFile, val)).join("");
        res.write(realTimeData)
        })
        .on('end',  (err) => {
          if (err) return console.log('connection closed due to errors', err);
         
          console.log('end');
          res.end()
        });
    }
})

server.listen(2000,'0.0.0.0')