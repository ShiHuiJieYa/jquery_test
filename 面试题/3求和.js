//转为数字 不能使用+   使用Number() 判断非NaN
//小数点不确定怎么判断 
function sum(...arg) {
    let arr = arg;
    let num = 0;
    arg.forEach(function (item) {
        //let it = Number(item);Number转true为1
        //parseFloat转true为NaN 
        let it = parseFloat(item);
        if (it.toString() != 'NaN') {
            num = num + it;
            num = num.toFixed(3) * 1000 / 1000;
            console.log(it)
        }
        // console.log(it)
    })
    console.log(num);
}

// sum(1, 2, 3, 4, 5);
// sum(5,null,-5);
//  sum('1.0', false, 1, true, 1, 'a', 1, 'b', 1, 'c', 1, 'd', '1', 'e', 1, 'f', 1, 'g', 1);
//sum('a');
sum(0.1, 0.2)