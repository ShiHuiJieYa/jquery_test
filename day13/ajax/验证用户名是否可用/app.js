const express = require('express');
const app = new express();
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.post('/test', (req, res) => {
    console.log(req.body);
    const {
        username
    } = req.body;
    let arr = ['zs', 'ls', 'mg']
    let result = arr.includes(username)
    res.send(result)
})
app.listen(5000, () => {
    console.log('ok')
})