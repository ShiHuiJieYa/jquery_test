const model = require('../model');
const md5 = require('md5');

function findUser(userName, password) {

    return model.findOne({
        userName,
        password: md5(password)
    });
}

module.exports = {
    findUser,
}