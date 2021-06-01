;
(async function () {

    const connect = require('../db');
    // console.log(connect);
    await connect;
    const modelObj = require('../model');
    modelObj.create({

        name: 'dm',
        age: 17,
    })
})()