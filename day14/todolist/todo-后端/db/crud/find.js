const model = require('../model')

function findAllTodos() {

    return model.find();//返回对象
}
module.exports = {
    findAllTodos,
}