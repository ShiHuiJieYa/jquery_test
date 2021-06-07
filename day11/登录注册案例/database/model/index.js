const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schemaObj = new Schema({

    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    }
}, {
    collection: 'lr'
});
console.log(mongoose.model("lr", schemaObj));
module.exports = mongoose.model("lr", schemaObj) //把model对象导出