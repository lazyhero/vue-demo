var Vue = require("vue")
var vueTouch = require('vue-touch')
Vue.use(vueTouch)
var dom =  document;
var parent_child_data = Vue.extend(require('./component/parent_child_data.vue'));


//全局注册
Vue.component('parent_child_data', parent_child_data);

//根组件
var Parent = new Vue({
    el: 'body',
    data: {
        one_way_static_prop: "以在子组件上显示传递的值为准",//单向绑定 直接在这里定义是不可以的
        one_way_sync_prop: "我会动",//动态单向绑定
        two_way_prop:"男女通吃",//双向绑定
        once_prop:"封建社会",//这个用的少吧？最后放……
        dispatch_para_parent:"看右边无耻的按钮"
    },
    methods:{
        paraToChild:function(){
            this.$broadcast('parent-msg', this.dispatch_para_parent);
        },
        esc:function(){
            alert("关闭");
        },
        testTap:function(){
            console.info("123");
        }
    },
    events: {
        'child-msg': function (msg) {
            this.dispatch_para_parent = msg;
        }
    },
    components: {
        'my-component': {
            template: '<div style="color: blue;">参看官网对<strong>is</strong>特性的描述大家可能不太理解,这一行就是官网示例</div>'
        },
        'wrong-component': {
            template: '<div style="color:red;">如果不按照官网示例写呢?下场就是现在(其实我的位置应该在第三行)</div>'
        },
        'butright': {
            template: '<div style="color:green;">我这行也没按照官网来,为毛对？<br>因为我在td标签里</div>'
        }
    }
})


window.Vue = Vue;
window.Parent = Parent;