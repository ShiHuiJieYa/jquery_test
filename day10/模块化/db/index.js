const mongoose = require("mongoose");
module.exports=mongoose.connect('mongodb://127.0.0.1:27017/dbtest', {
    useNewUrlParser: true,
    useUnifiedTopology: true,//mongodb://127.0.0.1:27017/dbtest
    //
});