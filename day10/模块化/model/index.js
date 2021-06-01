const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const schemaObj = new Schema({

    name: {

        type: String,
        required: true,
    },
    age: {

        type: Number,
        required: true,
    }
}, {
    collection: 'db'
});
const modelObj = mongoose.Model('db', schemaObj);
module.exports = modelObj;