var Vue = require("vue")
var dom =  document;
var parent_child_data = Vue.extend(require('./component/parent_child_data.vue'));
//var iframeComponent = Vue.extend(require('./component/iframe.vue'));
//var defaultComponent = Vue.extend(require('./component/default.vue'));
//var compareComponent = Vue.extend(require('./component/compare.vue'));
//var giftComponent = Vue.extend(require('./views/gift.vue'));
//var taskComponent = Vue.extend(require('./views/task.vue'));
//var myComponent = Vue.extend(require('./views/my.vue'));

//全局注册
Vue.component('parent_child_data', parent_child_data);
//Vue.component('iframe-component', iframeComponent);
//Vue.component('default-component', defaultComponent);
//Vue.component('compare-component', compareComponent);
//Vue.component('gift-component', giftComponent);
//Vue.component('task-component', taskComponent);
//Vue.component('my-component', myComponent);

//根组件
var Parent = new Vue({
    el: 'body',
    data: {
        one_way_static_prop: "以在子组件上显示传递的值为准",//单向绑定 直接在这里定义是不可以的
        one_way_sync_prop: "我会动",//动态单向绑定
        two_way_prop:"男女通吃",//双向绑定
        once_prop:"封建社会"
    }
    //events: {
    //    'navigation-msg': function (msg) {
    //        this.selectedChannel = msg;
    //    },
    //    'navigation-url-msg':function(msg){
    //        this.ad_page_url = msg;
    //    }
    //}
})


window.Vue = Vue;
window.Parent = Parent;