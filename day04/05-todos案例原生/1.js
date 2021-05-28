function showData() {
  let oMain = document.querySelector('.todo-main');
  //遍历json数组
  Data.map(function (item) {

    let str = `<li>
      <label>
        <input type="checkbox" ${item.isDone?'checked':''}/>
        <span>${item.isDo}</span>
      </label>
      <button class="btn btn-danger">删除</button>
    </li>`
    oMain.innerHTML += str;

  })
}


//在输入框中输入内容，点击回车把数据加入到todo-main中

function enterCon() {
  let oMain = document.querySelector('.todo-main');
  //先得到输入框dom对象.todo-header input
  let oIput = document.querySelector(".todo-header input");
  //设置键盘抬起事件
  oIput.onkeyup = function (e) {
    if (e.keyCode == 13) {
      //去空格.trim()
      let con = oIput.value;
      //清空input
      oIput.value = '';
      //判断是否为空 
      if (con.trim()) {
        //默认为没选中
        let str = `<li>
                <label>
                  <input type="checkbox" />
                  <span>${con}</span>
                </label>
                <button class="btn btn-danger">删除</button>
              </li>`
        oMain.innerHTML += str;
      }
    }

  }
}


//使用事件委托 绑定给删除按钮的父级元素todo-main点击事件
function delBtn() {

  //设置点击事件
  let oMain = document.querySelector('.todo-main');
  oMain.onclick = function (e) {

    if (e.target.nodeName == 'BUTTON') {

      e.target.parentNode.remove();
    }

  }
}



//判断是否父级元素todo-main的li的input是否全部选中
function isAllChecked() {
  // 判断li的总长度和li已选中inpput的长度对比
  let oLis = document.querySelectorAll(".todo-main li");
  let oInputs = document.querySelectorAll(".todo-main li input:checked");
  if (oLis.length == oInputs.length) {
    
    //
  }
}