const express = require('express');
const path = require('path');
const app = express();
app.get('/abc', (request, response) => {
    console.log(request.query);
    // response.send("<h1>你好</h1>")
    const newPath = path.resolve(__dirname, '../assets/music.mp3');
    //response.send(newPath);
    response.sendFile(newPath);
    //response.redirect('http://www.atguigu.com');
});
app.post('/abc/:id?', (request, response) => {

    console.log(request.params);
    console.log(request.body);
    response.send('ok');
})

app.listen(5000, (err) => {
    if (err) {
        console.log('启动失败', err)
    } else {
        console.log('启动成功')

    }

})