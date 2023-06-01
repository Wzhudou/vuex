// import axios from "axios";
import http from "@/utils/http";
import base from "./base";

const api = {
    // 登录接口
    login(params) {
        return http.post(base.baseUrl + base.login, params);
    },
    // 列表数据接口
    list() {
        return http.get(base.baseUrl + '/api/list');
    },
    // 请求绘制线图接口
    line() {
        return http.get(base.baseUrl + '/api/line');
    }
}
export default api;
