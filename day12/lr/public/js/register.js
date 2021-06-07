const oName = document.querySelector('input[name=userName]');
const oPwd = document.querySelector('input[name=password]');
const oRePwd = document.querySelector('input[name=repassword]');
const oBtn = document.querySelector('input[name=register]');

oName.oninput = function () {
     //先判断输入框的值是否为空
    const value = this.value.trim();
    if (!value) {
        return;
    }
    const
 }