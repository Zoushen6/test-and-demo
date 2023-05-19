const fs = require('fs')

// fs.readFile('./files/1.txt','utf-8',function(err,data){
//     if(err) {
//         return console.log(err);
//     }
//     console.log(data);
// })

// fs.writeFile('./files/1.txt','12465',function(err,data){
//     if(err) {
//         return console.log(err);
//     }
//     console.log('文件写入成功');
// })

// 由于是readFile writeFile都是异步，所以log的顺序有所不同，可以使用readFileSync writeFileSync进行同步写入（无回调函数）
//appendFile追加写入
//fs.promises.appendFile/readFile   promise方式追加写入/读取文件 fs.promises.writeFile/appendFile/readFile(path,data);

//路径问题，相对路径与绝对路径都不太合适，所以用__dirname 表示当前文件所处的目录
console.log(__dirname);

fs.readFile(__dirname + './files/1.txt','utf-8',function(err,data){
    if(err) {
        return console.log(err);
    }
    console.log('文件读取成功:' + data);
})