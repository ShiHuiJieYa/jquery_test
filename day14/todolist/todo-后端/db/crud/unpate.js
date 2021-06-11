const model = require('../model');

function undateTodo(id, isDone) {
    return model.updateOne({
        _id: id
    }, {
        $set: {
            isDone
        }
    });
}

function undateMutTodo(ids, isDone) {

    return model.updateMany({
        _id: {
            $in: ids
        }
    }, {
        $set: {
            isDone
        }
    })
}

module.exports = {
    undateTodo,
    undateMutTodo
}