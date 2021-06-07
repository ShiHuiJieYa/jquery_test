const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true,
}));
app.get('/test', (req, res) => {

    res.send(req.query);
})
app.post('/test', (req, res) => {

    res.send(req.body);
})
app.listen(5000, (err) => {
    if (!err) {

        console.log('服务器打开')
    } else console.log('出错', err);

})