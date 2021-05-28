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
//动态渲染数据，把data数组里的数据给页面
showData();

//在输入框中输入内容，点击回车把数据加入到todo-main中
enterCon()


//使用事件委托 绑定给删除按钮的父级元素todo-main点击事件
delBtn()

//判断是否父级元素todo-main的li的input是否全部选中

isAllChecked()