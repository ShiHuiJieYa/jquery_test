function myAjax(arg) {
    let {
        url,
        data,
        type = 'get',
        dataType,
        timeout,
        beforeSend,
        success,
        error,
        complete,
    } = arg;
    if (!url) return;
    //创建xhr对象
    const xhr = new XMLHttpRequest();
    let params = obj2str(data);
    if (type === 'get') {
        url += '?' + params;
        params = null;
    }
    xhr.open(type, url);
    if (type === 'post') {
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    }


    //设置超时时间
    xhr.timeout = timeout;
    // 请求发送之前,调用beforeSend
    // 如果没有传入beforeSend,请求正常发送
    // 如果传了beforeSend,里面没有显式的写return false, 还是正常发送请求
    // 如果传了beforeSend,里面有显式的写return false, 不发送请求
    let res = beforeSend && beforeSend();
    if (!res) return;

    xhr.send(params); //如果是get params是空的  如果是post params是键值对的字符串

   
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {

                complete && complete();
                if (xhr.status === 200) {

                    let value = xhr.responseText;
                    if (value === 'json') {
                        //json就转化为对象  不是json就直接输出字符串
                        value = JSON.parse(value);
                    }
                    success && success(value);
                } else error && error(xhr);
            }
        }


}

function obj2str(data) {
    let arr = [];
    for (key in data) {

        arr.push = key + data[key];
    }
    arr.join('&');
    return arr;

}