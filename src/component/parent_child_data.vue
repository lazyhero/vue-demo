<style>

</style>

<template>
        <div class="center-block" >
            <blockquote>
                <p>静态单向：{{one_way_static_prop}}</p>
            </blockquote>
            <blockquote>
                <p>动态单向：{{dynamicsinglefromparent}}</p>
            </blockquote>
            <blockquote>
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="sync_child" class="col-md-6">动态双向{{syncfromparent}}</label>
                        <div class="col-md-6">
                            <input id="sync_child" v-model="syncfromparent" class="form-control" placeholder="改变它">
                        </div>
                    </div>
                </form>
                </p>
                <p>也可以通过控制台:Child.syncfromparent 改变值看看</p>
            </blockquote>
            <blockquote>
                <p>事件方式：{{dispatch_para_child}}</p>
                <button @click="paraToParent()" class="default">点按钮把消息传给父</button>
            </blockquote>
        </div>
</template>

<script>
    module.exports = {
        props:['one_way_static_prop','dynamicsinglefromparent','syncfromparent'],
        data :function() {
            return {
                dispatch_para_child:"要把我给父!"
            }
        },
        ready:function(){
//            调试用
            window.Child = this;
        },
        methods:{
            paraToParent:function(){
                this.$dispatch('child-msg', this.dispatch_para_child+""+(new Date().getTime()));
            }
        },
        events: {
            'parent-msg': function (msg) {
                this.dispatch_para_child = msg;
            }
        }
    }
</script>
