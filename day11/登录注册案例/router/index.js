const express = require('express')
const {
    createUser
} = require('../database/crud/register') //解构对象
const {
    findUser
} = require('../database/crud/login');
const router = express.Router();
router.post('/register', async (req, res) => {
    const {
        userName,
        password,
    } = req.body //解构出来提交得到的用户名和密码
    await createUser(userName, password); //调用函数传入参数
    //成功后重定向到登录页面
    res.redirect('http://127.0.0.1:5000/views/login.html');

})
router.post('/login', async (req, res) => {
    //先获取到参数
    const {
        userName,
        password
    } = req.body;
    console.log(req.body);
    let user = await findUser(userName, password)
    //console.log(user);
    if (user) {
        //res.redirect('http://127.0.0.1:5000/views/home.html')
        // res.render('home', user)
        // 往响应头中添加了一个字段: set-cookie: userid=xxxxxxxxx
       // console.log(user._id)
        res.cookie('userid', user._id);
        //console.log(res.cookie('userid',user._id));
        console.log('进来了');
        // 往响应头中添加了一个字段: location: http://127.0.0.1:5000/home. 并且响应浏览器
        res.redirect('http://127.0.0.1:5000/home') //此种属于get,此时发出请求，只是发出请求，并不代表已经跳转了页面

    } else {
        res.send('密码或账号输入错误！')
    }
})
module.exports = router