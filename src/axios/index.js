import Vue from 'vue'
import Axios from 'axios'
import router from '../router'
import config from '../config/application.js'
import StringUtil from '@/utils/StringUtil'

//2.新创建一个vue实例
let v = new Vue();


Vue.prototype.$axios = Axios

Axios.defaults.baseURL = config.server_path;

//默认提交格式
Axios.defaults.headers = {
    'Content-Type': 'application/json; charset=utf-8'
}


/**
 * 全局请求拦截器
 */
Axios.interceptors.request.use(function (req) {
    if(req.token){
        req.headers = {
            'x-auth-token': $cookies.get('token')
        }
    }
    return req;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


/**
 * 全局响应拦截
 */
Axios.interceptors.response.use(
    response => {
        if(response.status == 200){
            if(response.data.code == 50001){
                //token异常
                // $cookies.remove('token');
                // router.push('/');
                // return Promise.reject(response.data.code);
                console.log('错误码：'+response.data.code+'描述：'+response.data.msg);
                return Promise.reject(response.data);
            }else if(response.data.code == 0 || response.data.code == 1){
                //服务器响应数据成功
                if(response.headers['update-token'] == 'true'){
                    //需要更换新的token
                    $cookies.set("token", response.headers['x-auth-token'], "1d", "/");
                }
                return response.data
            }else{
                console.log('错误码：'+response.data.code+'描述：'+response.data.msg);
                return Promise.reject(response.data);
            }
        }else{
            console.log("程序异常，跳转到错误页面");
        } 
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        return Promise.reject(error.response.status) // 返回接口返回的错误信息
    })


export default Axios


/**
 * 同步请求后台方法
 * get请求的参数只能放在param中
 * @param {Object} req 
 */
export async function syncSend(req){
    req = setPathData(req);
    let result ;
    await v.$axios({
        url: req.path,
        method: req.type,
        params: req.param,
        data:req.data,
        token:req.token
      })
      .then(rep => {
          result = rep.data;
    }).catch(e => {});
    return result;
}


/**
 * 异步请求服务器方法
 * 调用方需要重写一个ajaxBack方法来接收回调
 * get请求的参数只能放在param中
 * @param {Object} req 
 * @param {this} self 
 * @param {回调参数} obj 
 */
export function asyncSend(req,self,obj){
    req = setPathData(req);
    v.$axios({
        url: req.path,
        method: req.type,
        params: req.param,
        data:req.data,
        token:req.token
      })
      .then(rep => {
        self.ajaxBack(rep.data,obj);
    }).catch(e => {});
}


function setPathData(req){
    //路径上有参数
    if(Object.keys(req.pathVariable).length>0){
        req.path = StringUtil.strFormat(req.path,req.pathVariable);
    }
    return req;    
}



