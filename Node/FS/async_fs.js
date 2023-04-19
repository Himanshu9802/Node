const fs = require('fs')

// Creates Folder
// fs.mkdir('Thapa',(err)=>{
//     if(err){
//             console.log(err)
//     }else{
//         console.log('Folder Created')
//     }
// })

// Creates file & write data into it
// fs.writeFile('Demo/bio.txt','create with async filesystem ',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('File Created')
//     }
// })

// Appends data into existing file
// fs.appendFile('Demo/bio.txt',' with node js core modules',(err)=>{
//   if(err){
//        console.log(err)
//    }else{
//        console.log('Data Appended')
//    }
// })

// Reads data with format
// fs.readFile('Demo/bio.txt','utf-8',(err,data)=>{
//   if(err){
//        console.log(err)
//    }else{
//        console.log(data)
//    }
// })

// Rename file
// fs.rename('Demo/bio.txt','Demo/mybio.txt',(err)=>{
//   if(err){
//        console.log(err)
//    }else{
//        console.log('Renamed')
//    }
// })

// Deletes file
// fs.unlink('Demo/mybio.txt',(err)=>{
//   if(err){
//        console.log(err)
//    }else{
//        console.log('File deleted')
//    }
// })

// Deletes Folder
// fs.rmdir('Demo',(err)=>{
//   if(err){
//        console.log(err)
//    }else{
//        console.log('Folder deleted')
//    }
// })