const path = require('path')
const pathStr = path.join('/a','/b/c','../','./d','e')
console.log(pathStr);
const pathStr2 = path.join(__dirname,'./files/1.txt')
console.log(pathStr2);
let fileName = path.basename(pathStr2)
console.log(fileName);
//不带后缀的文件名
let fileNameWithoutExt = path.basename(pathStr2,'.txt')
console.log(fileNameWithoutExt);//1