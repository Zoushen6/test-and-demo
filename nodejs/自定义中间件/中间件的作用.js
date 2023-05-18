const express = require('express')

const app = express()

//定义一个最简单的中间件函数
const mw = (req,res,next) => {
    const time = Date.now()
    req.startTime = time
    next()
}

//可以连续定义多个中间件 按顺序use  执行

//全局生效的中间件
app.use(mw)

app.get('/',(req,res) => {
    res.send('home page'+ req.startTime);
})

app.get('/user',(req,res) => {
    res.send('user page');
})

app.listen(80,() => {
    console.log('express server running at http://127.0.0.1');
})