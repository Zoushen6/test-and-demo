const express = require('express')

const userRouter = require('./router/user')

const app = express()

app.get('/user',(req,res) => {
    res.send({name:'zs',age:18,gender:'男'})
})

app.post('/user',(req,res) => {
    res.send('请求成功')
})

app.get('/',(req,res) => {
    console.log(req.query);
    res.send(req.query)
})

app.get('/user/:id/:name',(req,res) => {
    console.log(req.params);    
    res.send(req.params)
})

//注册路由模块
// app.use(userRouter)

//注册路由模块的时候 添加统一的访问前缀 /api
app.use('/api',userRouter)

//注意： app.use()函数的作用  就是来注册全局中间件 ( express.Router,  express.static等等 都是中间件)

//http://127.0.0.1/in.47e38f9a.png  即可访问静态资源   
app.use(express.static('./http/crcc/assets/img')) //快速对外提供静态资源
app.use('/abc',express.static('./http/crcc/assets/img')) //快速对外提供静态资源  并在访问时需要加前缀abc

app.listen(80,() => {
    console.log('express server running at http://127.0.0.1');
})