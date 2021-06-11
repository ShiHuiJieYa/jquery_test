(async function () {
    const express = require('express');
    const app = new express();
    const delRotuer = require('./router/delete');
    const updRouter = require('./router/update');
    const faRouter = require('./router/find-add');
    // 利用cors.处理跨域
    const cors = require('cors');
    const connect = require('./db/connect');
    await connect;
    console.log('数据库链接成功')
    app.use(express.urlencoded({
        extended: true
    }))
    app.use(cors());
    app.use(delRotuer);
    app.use(updRouter);
    app.use(faRouter);
    app.listen(5000, () => {

        console.log('服务器打开')
    })

})()