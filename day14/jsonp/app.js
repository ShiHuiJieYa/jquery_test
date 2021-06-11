const express = require('express');
const app = new express();
app.get('/test', (req, res) => {
    console.log(req.query);
    let arr = [1, 2, 3]
    const {
        callback
    } = req.query;
    // res.send('<h2>你好</h2>')//res.send可以解析html标签
    res.send(`${callback}(${JSON.stringify(arr)})`)//'fn1([1,2,3])'

})
app.listen(5000, () => {
    console.log('服务器打开')
})