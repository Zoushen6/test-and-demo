const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer()

server.on('request',(req,res) => {
    const url = req.url
    const fpath = url === '/'?path.join(__dirname,'./crcc/index.html'):path.join(__dirname,'/crcc/',url)
    //这里如果用utf8读取文件，无法显示图片字体等静态资源，所以去掉
    fs.readFile(fpath,(err,data) => {
        if(err) {
          return res.end('404 Not Found')
        }
        res.end(data)
    })
})

server.listen(80,() => {
    console.log('server running at http://127.0.0.1')
})