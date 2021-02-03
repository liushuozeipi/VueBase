import dev from './application-dev.js'
import master from './application-master.js'



var active = 'dev';

if(active=='dev'){
    active=dev;
}else if(active == 'uat'){
    active=uat;
}else if(active == 'master'){
    active=master;
}


export default {
    //运行环境
    active : active.active,
    //后台服务地址
    server_path:active.server_path,
    //文件上传地址
    file_upload: active.file_upload,
    //文件下载地址
    file_download:active.file_download
}