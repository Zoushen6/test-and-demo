// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO_01：请配置 Session 中间件
const session = require('express-session')

app.use(session({
  secret: 'itheima',
  resave: false,
  saveUninitialized: true
}))

// 托管静态页面
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

// 登录的 API 接口
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  console.log(req.body);
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' })
  }

  // TODO_02：请将登录成功后的用户信息，保存到 Session 中
  req.session.user = req.body
  req.session.islogin = true
  console.log(req.session);
  res.send({ status: 0, msg: '登录成功' })
})

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // TODO_03：请从 Session 中获取用户的名称，响应给客户端
  if(!req.session.islogin) {
    return res.send({status: 1,msg: 'fail'})
  }
  res.send({status: 0,msg: 'success',username: req.session.user.username})
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // TODO_04：清空 Session 信息
  req.session.destroy(),
  res.send({
    status: 0,
    msg: '退出成功'
  })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8088, function () {
  console.log('Express server running at http://127.0.0.1:8088')
})