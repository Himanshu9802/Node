// importing file system
const fs = require('fs');

// ==============> create folder
// fs.mkdir('testFolder',()=>{
//    console.log('created folder');
//});

// ==============> creating null file
// type nul > index.js

// ==============> create & write file
// fs.writeFile('fs_demo.pdf','This quote is written through node file system',(err)=>{console.log('file written')});

// ==============> append data to existing file
// fs.appendFile('testFolder/testFile.txt',' This text is appended using fs',(err)=>{console.log('appending data')})

// ==============> decoding & reading data
// const data = fs.readFile('testFolder/testFile.txt','utf8',(err, data)=>{console.lgo(data)})

// ==============> renaming file
// fs.rename('fs_demo.txt','fs-demo.txt',()=>{console.log('file renamed')});

// ==============> removing file
// rm('fs_demo.txt',()=>{console.log('file removed')})

// ==============> removing folder
// fs.rmdir('testFolder',()=>{console.log('file removed)})