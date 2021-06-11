        var myData = [];

        function getData() {
          //let oMain = document.querySelector('.todo-main');
          //遍历json数组
          // Data.map(function (item) {

          //   let str = `<li>
          //     <label>
          //       <input type="checkbox" ${item.isDone?'checked':''}/>
          //       <span class=${item.isDone? 'done' : ''}>${item.isDo}</span>
          //     </label >
          //     <button class="btn btn-danger">删除</button>
          //   </li>`
          //   oMain.innerHTML += str;

          // })
          //把得到的json对象放到myData里面
          Data.forEach(function (item, index) {

            myData.push(item);
          })
        }


        //动态渲染数据，把data数组里的数据给页面，每次数组myData改变时调用此函数
        function showData(myData) {
          //遍历数组，把数组里的内容渲染出来
          let oMain = document.querySelector('.todo-main');
          //每次先清空之前的
          let newData = myData.map(function (item, index) {
            //item.setAttribute('index', index);
            let str = `<li>
              <label>
                <input type="checkbox" ${item.isDone?'checked':''}/>
                <span class=${item.isDone? 'done' : ''}>${item.isDo}</span>
              </label >
              <button class="btn btn-danger">删除</button>
            </li>`
            return str;
          })
          let con = newData.join(''); //数组转字符串
          oMain.innerHTML = con;

        }

        //在输入框中输入内容，点击回车把数据加入到todo-main中

        function enterCon() {
          let oMain = document.querySelector('.todo-main');
          //先得到输入框dom对象.todo-header input
          let oIput = document.querySelector(".todo-header input");
          //先得到当前的myData数组里的长度 -1就是下标
          let index = myData.length - 1;
          let id = 3;
          //设置键盘抬起事件
          oIput.onkeyup = function (e) {
            id++;
            if (e.keyCode == 13) {
              //去空格.trim()
              let con = oIput.value;
              //清空input
              oIput.value = '';
              //判断是否为空 
              if (con.trim()) {
                //默认为没选中
                //  let str = `<li>
                //          <label>
                //            <input type="checkbox" />
                //            <span>${con}</span>
                //  </label>
                //          <button class="btn btn-danger">删除</button>
                //        </li>`
                myData.push({
                  id,
                  isDo: con,
                  isDone: true,
                })
              }
            }

          }
          isAllChecked()
          showData();
        }

        //

        //当点击input时其后面的span加上属性done

        function clickInput() {
          //给todo-main设置点击事件，事件委托  实际判断点击是是否为input
          clickMain();

        }



        //给todo-main设置点击事件委托
        function clickMain() {

          let oMain = document.querySelector('.todo-main');
          oMain.onclick = function (e) {

            if (e.target.nodeName == 'BUTTON') {

              e.target.parentNode.remove();
            }

            if (e.target.nodeName == 'INPUT') {

              //当input的checked为选中状态就给span加上done，不为选中就去掉done
              if (e.target.checked) {
                e.target.nextElementSibling.classList.add('done');
              } else {
                e.target.nextElementSibling.classList.remove('done');
              }
            }
            //点击影响checked
            isAllChecked()
          }
        }

        //使用事件委托 绑定给删除按钮的父级元素todo-main点击事件
        function delBtn() {

          //设置点击事件
          clickMain();

        }



        //判断是否父级元素todo-main的li的input是否全部选中
        function isAllChecked() {
          // 判断li的总长度和li已选中inpput的长度对比
          let oLis = document.querySelectorAll(".todo-main li");
          //todo-footer下面的input
          let oAllInput = document.querySelector('.todo-footer input')
          // console.log(oAllInput)
          let oInputs = document.querySelectorAll(".todo-main li input:checked");
          if (oLis.length == oInputs.length) {
            //全部都选中的话 全选按钮处于选中状态
            oAllInput.checked = true;
            // console.log(1)
          } else {
            oAllInput.checked = false;
          }
        }

        //点击全选按钮
        function clickAllInput() {
          let oAllInput = document.querySelector('.todo-footer input')

          oAllInput.onclick = function () {
            let oInputs = document.querySelectorAll(".todo-main li input");
            Array.from(oInputs);
            if (oAllInput.checked) {
              //每次重新获取一下input

              oInputs.forEach(function (item) {

                item.checked = true;
                //其后面的兄弟元素添加done
                item.nextElementSibling.classList.add('done');
              })

            } else {
              oInputs.forEach(function (item) {

                item.checked = false;
                //其后面的兄弟元素删除done
                item.nextElementSibling.classList.remove('done');
              })

            }
          }
        }