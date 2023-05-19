//路由模块
let express = require('express')
let router = express.Router()

router.get('/user/list',(req,res) => {
    res.send('get user list')
})

router.post('/user/add',(req,res) => {
    res.send('new user add')
})

module.exports = router