//util存储所有的工具函数
let util = {};



//
//ajax
util.myAjax = function (args) {

    return new Promise((resolve, reject) => {

        let {
            url,
            type = 'get',
            data,
        } = args
        if (!url) return;
        const xhr = new XMLHttpRequest()
        //请求行，get要拼接上键值对的字符串，而data里面的是对象形式的
        let datastr = util.obj2str(data)
        if (type === 'get') {
            url += '?' + datastr;
            datastr = null;
        }
        xhr.open(type, url);


        //post请求
        if (type === 'post') {
            //设置请求头
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        }
        //console.log(datastr, typeof datastr)
        //请求主体 get不发为空，post发键值对形式的参数
        xhr.send(datastr);


        //监听响应状态
        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4) {
                if (xhr.status === 200) {

                    //为了防止没办法转为正确的格式
                    let res = JSON.parse(xhr.responseText); //JSON.parse()从一个字符串中解析出JSON对象
                    //JSON.stringify() 从一个对象中解析出字符串
                    //console.log(res);
                    resolve(res);
                } else {
                    reject();
                }
            }

        }

    })

}


util.obj2str = function (data) {
    if (!data) return;
    let arr = []
    for (key in data) {
        arr.push(`${key}=${data[key]}`)
    }
    return arr.join('&')

}

util.render = function (data) {
    //传进来的是数组 因为在roter里面就定了传进来参数格式为数组
    // if (!data) {
    //     return
    // };
    let oNolis = document.getElementById('nolis')
    let oFooter = document.querySelector('.todo-footer')
    console.log(oNolis)
    oNolis.style.display = 'none'
    oFooter.style.display = 'block'
    //如果数组数据为空，出现提示
    if (data.length === 0) {

        oNolis.style.display = 'block'
        oFooter.style.display = 'none'
    }


    let newData = data.map(function (item) {
        //item 是数据库的每一条数据
        return str = `
        <li>
        <label>
        <input type="checkbox" ${item.isDone === 'true' ? 'checked' : ''} data-id=${item._id} />
        <span class="${item.isDone === 'true' ? 'done' : ''}">${item.todoName}</span>
      </label>
      <button class="btn btn-danger" >删除</button>
    </li>`
    })
    // 将拼接好的字符串,渲染到todo-main中
    document.getElementsByClassName('todo-main')[0].innerHTML = newData.join('')
    //判断已完成任务和总任务有多少
    let oLis = document.querySelectorAll('.todo-main li');
    let oCheInputs = document.querySelectorAll('.todo-main li input:checked');
    let oCheSpan = document.getElementById('checked');
    let oAllSpan = document.getElementById('all');
    oCheSpan.innerHTML = `已完成${oCheInputs.length}`;
    oAllSpan.innerHTML = `全部${oLis.length}`;



    //动态渲染 当已完成等于全都选中  把全选按钮的input改成checked
    let oAllInput = document.querySelector('.todo-footer input');
    if (oLis.length === oCheInputs.length) {
        oAllInput.checked = true;
    } else {
        oAllInput.checked = false;
    }
}