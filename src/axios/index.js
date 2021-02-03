import Vue from 'vue'
import Axios from 'axios'
import router from '../router'
import config from '../config/application.js'

//2.新创建一个vue实例
let v = new Vue();


Vue.prototype.$axios = Axios

Axios.defaults.baseURL = config.server_path;

//默认提交格式
Axios.defaults.headers = {
    'Content-Type': 'application/json; charset=utf-8'
}



export default Axios



export function syncSend(){

}

export function asyncSend(){

}



