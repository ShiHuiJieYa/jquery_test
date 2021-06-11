const express = require('express');
const router = express.Router();
const {
    findAllTodos
} = require('../db/crud/find');
const {
    addTodos
} = require('../db/crud/add');
//响应所有的路由
router.get('/getTodoList', async (req, res) => {
    let {
        callback
    } = req.query;
    let todos = await findAllTodos(); //返回的是什么？返回的是对象
    //console.log('todo是',typeof todos)
    res.send(`${callback}(${JSON.stringify(todos)})`);

})
//响应一条任务的路由
router.post('/addTodo', async (req, res) => {
    const {
        todoName
    } = req.body;
    // console.log(todoName)
    // console.log(addTodos)
    await addTodos(todoName); //添加数据
    //添加数据之后需要再更新数据
    // console.log(1)
    let todoList = await findAllTodos();
    // console.log(2)
    res.send(todoList)

})
module.exports = router;