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
        </div>
</template>

<script>
    module.exports = {
        props:['one_way_static_prop','dynamicsinglefromparent','syncfromparent'],
        data :function() {
            return {
            }
        },
        ready:function(){
//            调试用
            window.Child = this;
        },
        methods:{
            test:function(){

            }
        }
    }
</script>
