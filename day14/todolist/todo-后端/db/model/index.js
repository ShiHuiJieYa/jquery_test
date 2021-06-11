const mongoose = require('mongoose');
const schema = mongoose.Schema;
const schemaObj = new schema({
    todoName: {
        type: String,
        required: true,
        unique: true,
    },
    isDone: {
        type: String,
        default: 'false'
    },
}, {
    collection: 'todo'
});
module.exports = mongoose.model('todo', schemaObj);