var Data = [

  {

    id: 1,
    isDo: '吃饭',
    isDone: true,

  },

  {

    id: 2,
    isDo: '睡觉',
    isDone: true,

  },
  {

    id: 3,
    isDo: '打豆豆',
    isDone: false,

  }

];


//todo-main给渲染页面
//遍历数组
if (Data.length) {
  var arrStr = Data.map(function (item) {

    //判断isDone里的值
    if (item.isDone) {
      return ('<li>\
            <label>\
              <input type="checkbox" checked/>\
              <span class="done">' + item.isDo + '</span>\
            </label>\
            <button class="btn btn-danger">删除</button>\
          </li>')

    } else {
      return ('<li>\
            <label>\
              <input type="checkbox"/>\
              <span>' + item.isDo + '</span>\
            </label>\
            <button class="btn btn-danger">删除</button>\
          </li>')
    }

  });

  //todo-main给渲染页面
  $('.todo-main').html(arrStr);

} else {

  $('.todo-main').hide();
  $('.todo-footer').hide();
}
// spanLabel();
//实现输入文本框点击回车加入到.todo-main里面
//判断回车使用keyup事件里面的keyCode等于13
//给todo-header里面的input添加键盘抬起事件
$('.todo-header input').on('keyup', function (e) {
  console.log(1);
  if (e.keyCode === 13) {

    //如果回车之后把输入内容加到.todo-main里面
    //添加之前先接受数据 并判断数据是否为空
    // var value = $('.todo-header input').val().trim(); 
    //$(this)就代表$('.todo-header input')
    var value = $(this).val().trim();
    if (!value) { //如果为空则返回不执行
      return;
    }
    //把input内容清空
    $(this).val('');
    var str = '<li>\
        <label>\
          <input type="checkbox"/>\
          <span >' + value + '</span>\
        </label>\
        <button class="btn btn-danger">删除</button>\
      </li>'
    $('.todo-main').append(str);

    //添加之后把之前隐藏的显示
    $('.todo-main').show();
    $('.todo-footer').show();
    $('.todo-wrap h2').remove();
    isAllChecked();

    //添加之后标签也会变
    spanLabel();

    //添加之后li会变
    delCheckedBtn();

  }

})

//给todo-main设置事件委托 input 点击时 checked改变后 后面的span标签也会跟着改变
inputClick();

//判断是否全选
isAllChecked();

//删除  用事件委托的方式给.todo-main的.btn设置点击事件
btnDel();
//点击全选 让其他的都选中
isChecked();

// console.log($('.todo-main li label input').length);
//刚开始没做任何处理之前点击删除已完成事件之后的效果
delCheckedBtn();

spanLabel();
var a = {};
var b = {
  key: 'b'
}
var c = {
  key: 'c'
}
a[b] = '123';
a[c] = '456';
console.log(a[a]);//a作为变量为一个对象  对象转字符串 
console.log({}.toString())