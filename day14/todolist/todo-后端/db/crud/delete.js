const model = require('../model');
//定义删除一条数据
function delOne(id) {
    return model.deleteOne({
        _id: id
    });
}

function delMut(ids) {
    console.log(1)
    return model.deleteMany({
        _id: {
            $in: ids
        }
    })
}

module.exports = {
    delOne,
    delMut
}