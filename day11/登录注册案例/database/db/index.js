const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/lrtest', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//返回的是一个promise对象