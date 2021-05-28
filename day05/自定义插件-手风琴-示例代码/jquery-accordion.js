/**
 * Created by luodianlei on 2018/4/27.
 */
//由于我们封装的是jquery插件,我们对应的方法需要使用jquery对象调用
// 所以应该把方法添加到jquery的原型上
// $.fn === $.prototype
$.fn.accordion = function (obj) {

  // 注意此时的this是jquery对象
  //不确定当前li是哪个 但可以确定调用该函数对象里面的li
  var $lis = this.find('li');
  //不确定当鼠标移入时，另外的li要变小多少
  //自已设置为150，如果没有传参就用自己设置的 有就用传来的参数
  obj.minWidth = obj.minWidth || 150;

  //移入的li的宽度应该是总宽度减去其他的总共最小宽度
  var maxWidth = this.width() - ($lis.length - 1) * obj.minWidth;
  // console.log($lis.length)
  //平均宽度为调用该函数对象的宽度除于li的个数
  var averWidth = this.width() / $lis.length;
  //给li设置平均宽度
  // console.log(averWidth)
  $lis.width(averWidth);

  //给li加上颜色
  $lis.each(function (index, element) {
    //element是dom对象
     element.style.backgroundColor= obj.colors[index];
  })
  $lis.mouseenter(function () {
    //animate自定义动画
    $(this).stop().animate({
      width: maxWidth
    }).siblings().stop().animate({
      width: obj.minWidth
    });
  })

  this.mouseleave(function () {

    $lis.stop().animate({
      //这里的宽度应该是一个平均的li值
      width: averWidth
    })

  })
}