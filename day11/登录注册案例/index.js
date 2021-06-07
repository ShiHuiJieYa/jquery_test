(async function () {

    const db = require('./database/db')
    const express = require('express');
    const app = express();
    const router = require('./router/index');
    const laRouter = require('./router/loginAfter');
    // 引入处理cookie的中间件
    var cookieParser = require('cookie-parser')
    // 处理接收cookie信息的中间件
    app.use(cookieParser())
    //等待数据库链接
    await db;
    console.log('链接成功');

    // const {
    //     createUser
    // } = require('./database/crud/register')
    // const {
    //     findUser
    // } = require('./database/crud/login');
    //处理静态资源的中间件
    // static中传入存放所有静态资源的路径
    app.use(express.static('./public'))
    //处理post请求的中间件
    app.use(express.urlencoded({
        extended: true
    }))

    // 配置模板引擎 npm i ejs
    // 告诉express,使用的ejs模板引擎
    app.set('view engine', 'ejs')
    // 告诉express,ejs对应的模板在哪个文件夹下面
    app.set('views', './mb')
    //配置路由
    app.get('/register', () => {
        console.log('get-ok')
    })
    // app.post('/register', async (req, res) => {
    //     const {
    //         userName,
    //         password,
    //     } = req.body //解构出来提交得到的用户名和密码
    //     await createUser(userName, password); //调用函数传入参数

    //     //成功后重定向到登录页面
    //     res.redirect('http://127.0.0.1:5000/views/login.html');

    // });
    // app.post('/login', async (req, res) => {
    //     //先获取到参数
    //     const {
    //         userName,
    //         password
    //     } = req.body;
    //     let user = await findUser(userName, password)
    //     console.log(user);
    //     if (user) {
    //         //res.redirect('http://127.0.0.1:5000/views/home.html')
    //         res.render('home', user)
    //     } else {
    //         res.send('密码或账号输入错误！')
    //     }
    // })
    app.use(router);
    app.use(laRouter);
    app.listen(5000, (err) => {

        if (err) {
            console.log("启动失败");
        } else console.log("启动成功");
    })
})()