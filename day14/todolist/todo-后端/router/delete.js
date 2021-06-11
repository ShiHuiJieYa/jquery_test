const express = require('express')
const router = express.Router();
const {
    delOne,
    delMut
} = require('../db/crud/delete')
const {
    findAllTodos,
} = require('../db/crud/find')
router.post('/deletTodu', async (req, res) => {
    let {
        id
    } = req.body;
    await delOne(id); //返回的是对象
    let todo = await findAllTodos();
    res.send(todo)

})
router.post('/clearAllDoneTodos', async (req, res) => {
    let {
        ids
    } = req.body;
    //ids接收过来是字符串的形式 "["",""]"  
    //JSON.parse(ids) 把字符串转化为对象  数组也是对象的一种
    ids = JSON.parse(ids)
    await delMut(ids);
    console.log(r)
    let todo = await findAllTodos()
    //console.log(todo)
    res.send(todo)
})
module.exports = router;