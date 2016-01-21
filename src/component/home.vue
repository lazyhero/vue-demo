<style>

</style>

<template>
        <div class="center-block page" v-bind:class="{'page-current':!isOpenPanel}">
            <div>首页内容</div>
            <div>首页内容</div>
            <div>首页内容</div>
            <div>首页内容</div>
            <div v-touch:tap="openPanel" style="background-color: #003366;color: white;font-weight: 600">动作:打开面板</div>
        </div>
        <panel v-if="isOpenPanel"></panel>
</template>

<script>
    define(function (require, exports, module) {
        var Panel = require("./panel.vue");
        module.exports = {
            data :function() {
                return {
                    isShowBottomBtn:false,
                    isOpenPanel:false
                }
            },
            ready:function(){
            },
            methods:{
                openPanel:function(){
                    this.isOpenPanel = true;
                }
            },
            components:{
                Panel:Panel
            }
        }
    });

</script>
