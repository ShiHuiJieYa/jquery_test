const express = require('express');
const app = express() //创建实例化对象

//自定义中间件
app.use(function (request, response, next) {

    request.a = 1;
    response.a = 1;
    console.log('中间件1');
    next();
})
app.use(function (request, response, next) {

    request.b = 2;
    response.b = 2;
    console.log('中间件2');
    next();
})
app.get('/test', (req, res) => {

    console.log(req.a);
    console.log(req.b);
    console.log(res.a);
    console.log(res.b);
    res.send('get-ok') //发送到客服端的回应
})
app.post('/test', (req, res) => {

    console.log(req.body); //post的接收是用body
    res.send('post-ok');
})

//服务器开启
app.listen(5000, () => {

    console.log('ok');
})