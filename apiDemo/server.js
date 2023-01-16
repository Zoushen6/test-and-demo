var http = require('http'),
    fs = require('fs')

//端口号
const port = 8088

//http方式
// var server = http.createServer(function (request, response) {
//     var url = request.url;
//     console.log(request.method + ': ' + request.url);
//     if (url === '/') {
//         fs.readFile('./index.html', function (err, data) {
//             if (!err) {
//                 response.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
//                 response.end(data);
//             } else {
//                 throw err;
//             }
//         })
//     } else if (url === '/data') {
//         fs.readFile('./data.json', function (err, data) {
//             if (!err) {
//                 response.writeHead(200, { "Content-Type": "text/json;charset=UTF-8" });
//                 response.end(data);
//             } else {
//                 throw err;
//             }
//         })
//     } else {
//         console.log("err");
//     }
// });
// server.listen(port);
// console.log("server is running at http://127.0.0.1:8088");

//express框架
const express = require('express')
const app = express()
//返回index.html页面
app.get('/', (req, res) => {
    const option = {
        root: __dirname,
        headers: {
            "Content-Type": "text/html;charset=UTF-8"
        }
    }
    //https://expressjs.com/zh-cn/4x/api.html#res.sendFile
    res.sendFile('index.html', option, function (error) {
        if (error) {
            console.log('Sent failed:', 'index.html' + error);
        } else {
            console.log('Sent sucess:', 'index.html');
        }
    });
})

app.get('/data', (req, res) => {
    fs.readFile('./data.json', function (err, data) {
        if (!err) {
            console.log(data);
            res.set("Content-Type", "text/json;charset=UTF-8")
            res.status(200).end(data);
        } else {
            throw err;
        }
    })
})

app.listen(port, () => { console.log("server is running at http://127.0.0.1:8088"); })

