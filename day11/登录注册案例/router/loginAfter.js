const express = require('express');
const path = require('path');
const router = express.Router();
//此时的接收登录时发送的get请求
router.get('/home', (req, res) => {
    //获取到userid
    console.log(req.cookies)
    console.log('进到home里面了')
    let {
        userid
    } = req.cookies;
    if (userid) {
        //如果有cookie就让页面跳转到详细页
        //render(),第一个参数为ejs  第二个为对象
        res.render('home', {
            user: {
                userName: 'zs'
            },
            arr: ['a', 'b', 'c'],
            flag: true,
            message: 'abc'
        })
    } else {
        res.redirect('http://127.0.0.1:5000/views/login.html'); //重定向
        //之前输入的是/home但是未成功登录不能进home页面就重定向到登录页面


    }
})

//接收detail的请求
router.get('/detail', (req, res) => {

    let {
        userid
    } = req.cookies;
    if (userid) {
        //跳转到detail页面上
        res.sendFile(path.resolve(__dirname, '../public/views/detail.html'))
    } else {
        res.redirect('http://127.0.0.1:5000/views/login.html');
    }
})
module.exports = router