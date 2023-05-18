// 1.一定要在路由之前注册中间件
// 2.客户端发送过来的请求，可以连续调用多个中间件进行处理
// 3.执行完中间件的业务代码之后，不要忘记调用next()函数
// 4.为了防止代码逻辑混乱，调用next()函数后不要再写额外的代码
// 5.连续调用多个中间件时，多个中间件之间，共享req和res对象


// 中间件的分类：
// 1.应用级别的中间件
// 通过app.use()或app.get()或app.post(),绑定到app实例上的中间件，叫做应用级别的中间件

// 2.路由级别的中间件
// 绑定到express.Router()实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。只不
// 过，应用级别中间件是绑定到app实例上，路由级别中间件绑定到router实例上，代码如下：
let app = express()
let router = express.Router()
//路由级别的中间件
router.use(function (req,res,next){
    console.log('Time:'+ Date.now())
    next()
})
app.use('/',router)

//3.定义错误级别的中间件
// 错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。
// 格式：错误级别中间件的function处理函数中，必须有4个形参，形参顺序从前到后，分别是(err,req,res,nex)。  *****必须注册在所有路由之后*****
app.get('/',(req,res)=>{
    throw new Error('服务器内部发生了错误！')
    res.send('Home page.')
})
app.use((err,req,res,next) => {
    console.log('发生了错误！'+ern.message)
    res.send('Error:'+ err.message)
})

// 4.Express内置的中间件
// 自Express4.16.0版本开始，Express内置了3个常用的中间件，极大的提高了Express项目的开发效率和体验：
// express.static快速托管静态资源的内置中间件，例如：HTML文件、图片、CSS样式等（无兼容性）
// express.json解析SON格式的请求体数据（有兼容性，仅在4.16.0+版本中可用）
// express..urlencoded解析URL-encoded格式的请求体数据（有兼容性，仅在4.16.0+版本中可用）

//5.第三方中间件  npm install