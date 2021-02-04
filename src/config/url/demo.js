//demo模块请求地址
export default {
    get:{
        queryPage:{
            path:'/profession/course/manager/page/{current}/{size}',//地址
            type:'get',//请求类型
            data:{},//body传参
            param:{},//？传参
            pathVariable:{},//路径传参
            token:false//是否需要在请求头中加入token
        },
        queryId:{
            path:'/profession/course/manager/{id}',//地址
            type:'get',//请求类型
            data:{},//body传参
            param:{},//？传参
            pathVariable:{},//路径传参
            token:false//是否需要在请求头中加入token
        }
    },
    post:{

    },
    put:{

    },
    delete:{

    }
}