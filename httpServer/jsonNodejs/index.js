const fs = require('fs')

// 1. object
const bioData = {
    name: 'Himanshu',
    age: 25,
    phone: 8460159550
};

// stringify converts object to json
// parse converts json to object

// 2. converting object to json
const DATA = JSON.stringify(bioData);

// 3. writting data into file
fs.writeFile('api.json', DATA, (error)=>{
    error ? console.log(error) : console.log('DONE')
});

// 4. reading file data & converting back to object
const fileData = fs.readFile('api.json','utf-8',(error, res) => {
    error ? console.log(error) : console.log(res)

    console.log('OBJECT', JSON.parse(res).name)
})


