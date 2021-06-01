;
(async function () {

    const mongoose = require("mongoose");
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/dbtest', {

            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("连接成功");

        const Schema = mongoose.Schema; //得到mongoose的构造函数
        const schemeObj = new Schema({

            name: {

                type: String,
                require: true,
            },
            age: {

                type: Number,
                require: true,
            }
        }, {
            collection: 'db'
        });


        const modelObj = mongoose.model('db', schemeObj);
        const re = modelObj.create({
                name: 'lh',
                age: 23
            },
            // (err, data) => {
            //     console.log(err, data);
            // }
        )
        console.log(re);
    } catch (error) {
        console.log(error)
    }
})()