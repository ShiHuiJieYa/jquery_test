//一打开网页把数据库里面的数据渲染到页面上
//为了防止同源  使用script

// const {
//     findAllTodos
// } = require("../../../todo-后端/router/find-add");

let script = document.createElement('script');
script.src = 'http://127.0.0.1:5000/getTodoList?callback=getTodos'
document.body.appendChild(script);

function getTodos(data) {
    //把拿来的回应的内容渲染到页面上
    //渲染使用工具类里面的函数

    //data是从数据库里查询出来的数据
    util.render(data)
}

//当点击 即键盘抬起的事件keycode为回车（13） 回车时往数据库添加数据而且通过工具类的函数对页面进行渲染
//todo-header 里面的input
let oEnter = document.querySelector('.todo-header input');
//console.log(oEnter)
oEnter.onkeyup = async function (e) {
    if (e.keyCode === 13) {
        // console.log(e.target.value)
        let value = this.value.trim();
        if (!value) return;
        //使用myAjax对发出请求 url不同对应的不同的路由
        //router对应不同的路由 
        //当点击回车时，相当于传入\addTodo的url http://127.0.0.1:5000/addTodo 
        //find-add里面的接收\addTodo的路由就会处理
        //调用addTodos函数往数据库添加数据，并调用findAllTodos函数返回当前数据库的新数据
        //返回的数据会通过ajax的resove(data)返回给我们
        //把新数据作为参数传入到render函数，渲染页面
        let data = await util.myAjax({ //返回的数据会通过ajax的resove(data)返回给我们
            url: 'http://127.0.0.1:5000/addTodo',
            data: {
                todoName: value,
            },
            type: 'post',
        })
        //console.log(1)
        //渲染到页面上
        console.log(data, typeof data)
        util.render(data)
        this.value = ''
    }

}

//删除按钮
//点击input改变数据库里面的isDone
//给todo-main设置事件委托

let oMain = document.querySelector('.todo-main');
oMain.addEventListener('click', async function (e) {
    //判断点击的是否是input
    if (e.target.nodeName === 'INPUT') {
        //把input的checked属性加入数据库中
        //需要使用ajax发送请求

        //每次渲染的时候都把id加到了input的data-id属性上面了
        //刚进入页面时使用了script得到了数据库的最初始数据，渲染时给其加了id
        //当添加了新的数据进数据库时 又渲染了一次 给新得到的数据又添加了一次data-id 
        let id = e.target.dataset.id
        let value = e.target.checked
        let data = await util.myAjax({ //返回的数据会通过ajax的resove(data)返回给我们
            url: 'http://127.0.0.1:5000/updateTodo',
            data: {
                id,
                isDone: value,
            },
            type: 'post',
        })

        //console.log(data, typeof data)
        //渲染到页面上
        util.render(data)


    }

    if (e.target.nodeName === 'BUTTON') {

        //把此条数据的对应id数据库里的数据删除
        //拿一下id 其上一个兄弟元素节点的子元素input
        let oInput = e.target.previousElementSibling.querySelector('input');
        let id = oInput.dataset.id
        //console.log(id)
        let data = await util.myAjax({ //返回的数据会通过ajax的resove(data)返回给我们
            url: 'http://127.0.0.1:5000/deletTodu',
            data: {
                id,
            },
            type: 'post',
        })

        util.render(data);
    }
})



//点击全选按钮todo-footer input
let oALLInput = document.querySelector('.todo-footer input');
oALLInput.onclick = async function () {
    //点击时判断一下当前input的checked是否处于选中

    //得到todo-main 下面的input
    let oInputs = document.querySelectorAll('.todo-main li input')
    oInputs = Array.from(oInputs);
    let ids
    if (oALLInput.checked) {
        //此时找到处于false的input
        ids = oInputs.reduce((preValue, item) => {
            if (!item.checked) {

                preValue.push(item.dataset.id);
            }
            return preValue
        }, [])
    } else {

        ids = oInputs.reduce((preValue, item) => {
            if (item.checked) {
                preValue.push(item.dataset.id);
            }
            return preValue
        }, [])
    }
    //console.log(ids)
    //console.log(JSON.stringify(ids))
    let todo = await util.myAjax({
        url: 'http://127.0.0.1:5000/updateMutTodo',
        data: {
            ids: JSON.stringify(ids),
            isDone: oALLInput.checked,
        },
        type: 'post'
    })

    util.render(todo);
}


//删除已完成任务的按钮
let oDelAll = document.querySelector('.btn');
oDelAll.onclick = async function () {

    let oInputs = document.querySelectorAll('.todo-main li input:checked')
    oInputs = Array.from(oInputs);
    let ids = []
    oInputs.forEach(function (item) {
        ids.push(item.dataset.id)
    })
    //console.log(ids)
    let todo = await util.myAjax({
        url: 'http://127.0.0.1:5000/clearAllDoneTodos',
        data: {
             ids: JSON.stringify(ids),
            
        },
        type: 'post'
    })
    util.render(todo)
}