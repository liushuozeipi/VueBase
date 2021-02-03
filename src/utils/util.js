export default { isNull, isNotNull }

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