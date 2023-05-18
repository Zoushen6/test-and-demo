const express = require('express')

const app = express()

//定义一个最简单的中间件函数
const mw = (req,res,next) => {
    console.log('局部中间件');
    next()
}

const mw1 = (req,res,next) => {
    console.log('局部中间件');
    next()
}

//mv中间件只会在此路由中生效  
app.get('/',mw, (req,res) => {
    res.send('home page');
})

//如果多个局部中间件： 以下两种方法都可以
// app.get('/',mw,mw1, (req,res) => {res.send('home page');})
// app.get('/',[mw,mw1], (req,res) => {res.send('home page');})

app.get('/user',(req,res) => {
    res.send('user page');
})

app.listen(80,() => {
    console.log('express server running at http://127.0.0.1');
})