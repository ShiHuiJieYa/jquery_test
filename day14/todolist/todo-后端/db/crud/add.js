const model = require('../model')

function addTodos(todoName) {

    return model.create({
        todoName,
    });
}

module.exports = {
    addTodos,
}