let oName = document.querySelector('input[name=userName]');
let oPwd = document.querySelector('input[name=password]');
let oBtn = document.querySelector('input[name=login]');
console.log(oPwd)
//先设置一下当输入用户名时是否符合正则表达式

oName.oninput = function (e) {

    const value = this.value.trim();
    let oSpan = this.nextElementSibling;
    //判断是否内容为空
    if (!value) {

        oSpan.textContent = '';
        return
    };
    let reg = /^web\w{4,9}/;
    //获取span标签
    if (reg.test(value)) {

        oSpan.textContent = 'ok';
        oSpan.style.color = "green";

    } else {

        oSpan.innerHTML = '用户名应该为web开头，有8~12位';
        oSpan.style.color = "red";

    }
}

oPwd.oninput = function (e) {
    //密码只能为8-16位，必须要有字母和数字的组合
    //先看确认密码是否输入没

    const value = this.value.trim();
    let oSpan = this.nextElementSibling;
    if (!value) {
        oSpan.textContent = '';
        return
    };
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
    ///let reg = /^(?a)(?b)/;以a或者以b开头
    //let reg = /^(?![0-9]+$)/

    //获取span标签

    if (reg.test(value)) {
        oSpan.textContent = 'ok';
        oSpan.style.color = "green";

    } else {

        oSpan.innerHTML = '密码只能为8-16位，必须要有字母和数字的组合';
        oSpan.style.color = "red";

    }
}



oBtn.onclick = function (e) {
    //点击时校验三个输入框后面的span内容是否都为ok
    const oSpans = document.querySelectorAll('span');
    console.log(oSpans)
    if (!(oSpans[0].textContent === 'ok') || !(oSpans[1].textContent === 'ok')) {

        alert('表单格式错误！请重新填写');
        return e.preventDefalut();
    }

}