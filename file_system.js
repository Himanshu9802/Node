// importing file system
const fs = require('fs');

// ==============> create folder
// fs.mkdirSync('testFolder');

// ==============> creating null file
// type nul > index.js

// ==============> create & write file
// fs.writeFileSync('fs_demo.pdf','This quote is written through node file system');
// ==============> reading buffer data from file
// const buf_data = fs.readFileSync('fs_demo.pdf');

// ==============> append data to existing file
// fs.appendFileSync('testFolder/testFile.txt',' This text is appended using fs')

// ==============> decoding & reading data
// const data = fs.readFileSync('testFolder/testFile.txt','utf8')
// console.log(data)

// ==============> renaming file
// fs.renameSync('fs_demo.txt','fs-demo.txt');
// ==============> renaming file
// fs.renameSync('testFolder/testFile.txt','testFolder/testFile2.txt')

// ==============> removing file
// rmSync('fs_demo.txt')
// ==============> removing file
// fs.unlinkSync('testFolder/testFile2.txt')

// ==============> removing folder
// fs.rmdirSync('testFolder')