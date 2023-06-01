import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import Mine from '@/pages/Mine';

import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
    meta: {

    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// // 先拿本地的token去校验
const localToken = localStorage.getItem('token');
if (localToken) {
  store.commit('login', localToken);
}

router.beforeEach((to, from, next) => {
  // 判断token是否存在
  // const token = localStorage.getItem('token');
  const token = store.state.loginModule.token;
  // 是否登录
  if(token) {
    // 已登录，去登录页后定位到首页
    if (to.path === '/login') {
      next('/')
    } else {
      next();
    }
  } else {
    // 没有登录
    if (to.path === '/login') {
      next();
    } else {
      next('/login?redirect=' + to.fullPath)
    }
  }
})


export default router;