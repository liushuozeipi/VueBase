export default { isNull, isNotNull ,strFormat }

/**
 * 判断字符串是否为空
 * @param {String} param 
 */
function isNull(param) {
    let back = false;
    param = param.trim();
    if (param == '' || param == null || param == undefined || param == 'undefined' || param.length == 0) {
        back = true
    }
    return back;
}
/**
 * 判断字符串是否不为空
 * @param {String} param 
 */
function isNotNull(param) {
    let back = true;
    param = param.trim();
    if (param == '' || param == null || param == undefined || param == 'undefined' || param.length == 0) {
        back = false
    }
    return back;
}

/**
 * 字符串替换方法
 * @param {Object} s 替换前的字符串
 * @param {*} format 要替换的内容
 */
function strFormat(s , format){
    if(format.length == 0) return this;
    var param = format;
    if(typeof(param) == 'object') {
        for(var key in param)
            s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
        return s;
    } else {
        for(var i = 0; i < format.length; i++)
            s = s.replace(new RegExp("\\{" + i + "\\}", "g"), format[i]);
        return s;
    }
}