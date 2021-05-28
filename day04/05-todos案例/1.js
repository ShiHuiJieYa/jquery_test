//判断是否全选
function isAllChecked() {
    //点击todo-footer的input事件触发


    var re = ($('.todo-main label input').length === $('.todo-main label input:checked').length);
    if (re) {
        $('.todo-footer input').prop('checked', re);
    } else {
        $('.todo-footer input').prop('checked', false);

    }

}
//给todo-main设置事件委托 input 点击时 checked改变后 后面的span标签也会跟着改变
function inputClick() {

    $('.todo-main').on('click', 'label input', function () {
        //如果选中了 就给span加上done 没有选中就去掉done
        // console.log($(this));
        if ($(this).prop('checked')) {

            $(this).next().addClass('done');
        } else {
            $(this).next().removeClass('done');

        }
        isAllChecked();

        //checked改变了
        delCheckedBtn();
        //点击input标签也会变
        spanLabel();
    })
}

//删除  用事件委托的方式给.todo-main的.btn设置点击事件
function btnDel() {

    $('.todo-main').on('click', '.btn-danger', function () {
        console.log(1);
        $(this).parent().remove();
        //删除之后负判断是否要全选
        isAllChecked();
        //删除所有的li之后 应该不展示todo-main 和todo-footer
        isShow();
        //删除li之后，li也变了
        delCheckedBtn();
        //删除之后标签也会改变
        spanLabel();
    })

}
//判断todo-main 和todo-footer是否展示
function isShow() {
    //判断todo-main里面的li是否为空
    $('.todo-main').children().length ? show() : hide();
}

function show() {
    //todo-main 和todo-footer展示
    $('.todo-main,.todo-footer').show();

}

function hide() {
    //todo-main 和todo-footer展示隐藏
    $('.todo-main,.todo-footer').hide();
    $('.todo-wrap').append('<h2>恭喜你没有任务哦！</h2>')
}

//点击全选 让其他的都选中
function isChecked() {
    //全选按钮点击时判断是否选中
    $('.todo-footer input').on('click', function () {
        // console.log(1);
        // //把todo-main里li里面的input选中,把后面的span加上class

        if ($(this).prop('checked')) {

            $('.todo-main li label input').prop('checked', true).addClass('done')
        } else {
            $('.todo-main li label input').prop('checked', false).removeClass('done')
        }
        // //全选之后已完成的input的checked变化
        // delCheckedBtn();
        // spanLabel();
    })



}

//标签已完成 和全部的
function spanLabel() {
    var finishNum = $('.todo-main li label input:checked').length;
    var allNum = $('.todo-main li label input').length;
    $('.todo-footer #finished').html('已完成' + finishNum);
    console.log($('.todo-footer .all'));
    $('.todo-footer .all').html('/ 全部' + allNum);
}


//点击清除已完成按钮时，把checked都改为false
//要格外注意 在那个地方运行
function delCheckedBtn() {
    // 给清除已完成按钮添加点击事件
    $('.todo-footer .btn').on('click', function () {

        //把todo-main li label input里面的checked都为true的li都删了，全选就把所有包括脚（todo-footer）删了
        //注意：当做删除 添加 点击input事件时，如果再点击按钮运行事件的时候 每个input的状态是不一样
        //全选之后已完成的input的checked变化
        //input的数量也不一样 所以在这些操作的事件里都要加上本次事件函数的运行
        if ($('.todo-main li label input').prop('checked')) {
            //如果是true 的话说明是已完成事件 删除li
            $('.todo-main li label input:checked').parent().parent().remove();
            //调用一下isisShow()，因为可能把li删完
            isShow();
        }

        spanLabel();
    })
}