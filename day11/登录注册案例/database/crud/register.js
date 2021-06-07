const modelObj = require('../model');
const md5 = require('md5');

function createUser(userName, password) {

    return modelObj.create({
        userName,
        password: md5(password)
    }, )
}
//导出这个函数
module.exports = {
    createUser,
}