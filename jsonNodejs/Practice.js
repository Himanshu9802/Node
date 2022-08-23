const fs = require('fs')

const data = {
    name: 'John Doe',
    age: 23,
    mobile: 9876526386
}

const jsonData = JSON.stringify(data);

fs.writeFile('demo.json',jsonData,(err) => {
    console.log("🚀 ~ file: Practice.js ~ line 12 ~ fs.writeFile ~ writeFile") 
});

fs.readFile('demo.json','utf-8',(err, data)=>{
    // console.log("🚀 ~ file: Practice.js ~ line 16 ~ fs.writeFile ~ readFile ==============> ",data)

    const parseData = JSON.parse(data);

    console.log("🚀 ~ file: Practice.js ~ line 20 ~ fs.writeFile ~ readFile ==============> ",parseData)

})

