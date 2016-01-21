<style>

</style>

<template>
        <div class="center-block page-current" transition="page">
            <div>面板内容</div>
            <div>面板内容</div>
            <div>面板内容</div>
            <div>面板内容</div>
            <div v-touch:tap="back" style="background-color: #461006;color: #fff;font-weight: 600">动作:返回</div>
        </div>
</template>

<script>
    module.exports = {
        data :function() {
            return {
            }
        },
        ready:function(){
//            调试用
        },
        methods:{
            back:function(){
                this.$parent.isOpenPanel = false;
            }
        }
    }
</script>
