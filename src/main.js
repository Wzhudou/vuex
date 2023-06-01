// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api';

// echarts
import myEcharts from './utils/myEcharts';
Vue.use(myEcharts);

// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// import '../node_modules/echarts/lib/chart/map'
// import * as echarts from 'echarts'
// Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.prototype.$api = api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
