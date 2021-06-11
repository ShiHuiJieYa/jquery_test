const express = require('express');
const router = express.Router();
const {
    undateTodo,
    undateMutTodo
} = require('../db/crud/unpate')
const {
    findAllTodos
} = require('../db/crud/find');
//修改一条任务
router.post('/updateTodo', async (req, res) => {
    let {
        id,
        isDone
    } = req.body;
    await undateTodo(id, isDone);
    let todoList = await findAllTodos();
    res.send(todoList)
})
//修改全选任务
router.post('/updateMutTodo', async (req, res) => {
    let {
        ids,
        isDone
    } = req.body;
    ids = JSON.parse(ids);
    // 注意: ids 是一个数组格式的字符串. 想要通过JSON.parse转成数组,数组中应该是双引号
    let r = await undateMutTodo(ids, isDone);
    //console.log(r);
    let todoList = await findAllTodos();
    //console.log(todolist)
    res.send(todoList)
})
module.exports = router;