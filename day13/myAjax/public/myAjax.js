function myAjax(arg) {

    return new Promise((resolve, reject) => {

        let {

            url,
            type = 'get',
            timeout = 60000,
            datatype = 'json',
            data,
            success,
            error,
            beforeSend,
            complete,
        } = arg
        //1.先判断url是否为空
        if (!url) return;

        //2.创建xhr对象
        const xhr = new XMLHttpRequest();

        //3.设置超时事件
        xhr.timeout = timeout;


        //4.请求行 xhr.open();get形式要拼接字符串到url上面，post则不需要
        //4.1判断type为post还是get默认为get
        //4.2若为get需要把data里面的对象转化为键值对的字符串
        //4.3写一个专门从对象转键值对的字符串 obj2str的函数
        let agrams = obj2str(data);
        if (type === 'get') {
            url += '?' + agrams;
            //get的请求体是没有参数的
            agrams = null;
        }
        xhr.open(type, url);

        //5.请求头 只有post有
        if (type === 'post') {

            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        }

        //6.判断beforeSend是否传入或是否显示的返回了false，如果返回false，则不发送请求
        let result = beforeSend && beforeSend();
        //6.1只有直接返回false才不发送请求,0,undfiend此类没用
        if (result === false) return;

        //7.请求体
        xhr.send(agrams); //post有参数，get没有

        //8.处理相应
        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4) {
                //请求完成，不论成功或失败
                complete && complete();
                if (xhr.status === 200) {

                    //请求成功
                    //9 给出回应，此时回应的文本格式跟datatype有关
                    //9.1 默认为json 格式，如果为json格式就是json对象的形式
                    //9.2 为text就为字符串形式
                    let value = xhr.responseText;
                    if (datatype === 'json') {
                        //9.3为json 就要转化为json对象的形式
                        value = JSON.parse(value);
                    }
                    success && success(value);
                    resolve(value)
                }

                ///失败
                else {
                    error && error(xhr);
                    reject();
                }

            }
        }

    })

}

function obj2str(obj) {
    if (!obj) return;
    let arr = [];
    for (key in obj) {

        arr.push(key + '=' + obj[key]);
    }
    //把数组转化为字符串且逗号用&代替
    return arr.join('&');

}