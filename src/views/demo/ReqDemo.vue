<template>
    <div>
        <h2>hello</h2>
        <button @click="push">同步请求按钮</button>
        <button @click="apush">异步请求按钮</button>
        <button @click="test">请求按钮</button>
    </div>
</template>
<script>

export default {
    name: 'ReqDemo',
    data(){
        return {

        }
    },
    methods:{
        async push(){
            let req =  JSON.parse(JSON.stringify(this.url.demo.get.queryPage));
            req.pathVariable = {current:1,size:1}
            req.param = {nameLikeQuery:'安全管理'}
            let aa = await this.syncSend(req);
            console.log(JSON.stringify(aa))
        },
        apush(){
            let req =  JSON.parse(JSON.stringify(this.url.demo.get.queryPage));
            req.pathVariable = {current:1,size:1}
            req.param = {nameLikeQuery:'安全管理'}
            console.log('调用请求')
            this.asyncSend(req,this,'async');
            console.log('调用结束')
        },
        ajaxBack(rep,back){
            console.log('收到响应')
            console.log(JSON.stringify(rep));
            console.log(back)
        },
        async test(){
            let req =  JSON.parse(JSON.stringify(this.url.demo.get.queryId));
            req.pathVariable = {id:1}
            let aa = await this.syncSend(req);
        }
    }

}
</script>

<style>
    
</style>