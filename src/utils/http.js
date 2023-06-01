// 封装axios
import axios  from 'axios';
import router from '../router';
import store from '../store';

// 步骤一:创建axios实例
const instance = axios.create({timeout: 5000}); // 超时时间
// 如果请求头是别的格式
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// instance.defaults.headers.common['Authorization'] = localStorage.getItem('token'); //token在vuex --- 所有的接口都需要token放这里
// instance.defaults.headers.common['Authorization'] = store.state.loginModule.token; //token在vuex --- 所有的接口都需要token放这里
// console.log('ttt', store.state.loginModule.token);
// 步骤二：设置拦截器
// 请求拦截器
instance.interceptors.request.use((config) => {
    // 成功执行
    // console.log(config);
    const token = store.state.loginModule.token;
    if (token) {
        config.headers.Authorization = token;
    } 
    return config;
}, (error) => {
    // 失败执行
    // console.log(error);
    return error
});
// 响应拦截
instance.interceptors.response.use((response) => {
    // 成功执行
    // console.log('response', response);
    errorHandle(response.status, response.data.message);
    return response.data;
}, (error) => {
    // 失败执行
    // console.log(error);
    return error
});

const toLogin = () => {
    router.push({
        path: '/login',
    })
}

// 错误信息处理 - 具体项目具体处理
const errorHandle = (status) => {
    switch (status) {
        case 400:
            toLogin();
            console.log('信息校验失败');
            break;
        case 401: 
            toLogin();
            console.log('认证失败');
            break;
        case 403: 
            toLogin();
            // 清除token
            localStorage.removeItem('token');
            console.log('Token校验失败');
            break;
        case 404: 
            toLogin();
            console.log('请求资源不存在');
            break;
        default:
            // console.log(message);
            break;
    }
}

export default instance;