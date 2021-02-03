<template>
    <div>
        <h2>hello</h2>
        <button @click="push">请求按钮</button>
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
        push(){
            alert(123)
        }
    }

}
</script>

<style>
    
</style>