var Vue = require("vue")
var vueTouch = require('vue-touch')
Vue.use(vueTouch)

//全局注册
Vue.component('home', require("./component/home.vue"))

//根组件
var Parent = new Vue({
    el: 'body',
    data: {
        currentView:"home"
    }
})


window.Vue = Vue;
window.Parent = Parent;