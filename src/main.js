import { createApp } from 'vue'
// import Vue from 'vue';
import App from './App.vue';
import store from './store';
createApp(App).use(store).mount('#app'); // vue2脚手架的使用
// new Vue({
//     store,
//     render: h =>h(App)
// }).$mount('#app');
