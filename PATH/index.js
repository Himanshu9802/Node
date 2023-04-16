const path = require('path')

console.log("Directory", path.dirname('PATH\index.js'))
console.log("Extension", path.extname('PATH\index.js'))
console.log("Basename", path.basename('PATH\index.js'))

console.log("Path Parse",path.parse('PATH\index.js'))