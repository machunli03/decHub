import axios from "axios";

const request = axios.create({
  baseURL: 'https://foufou' //url
})
//请求拦截器
axios.interceptors.request.use(function (config) {
  // 统一设置用户身份 token

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
//响应拦截器
axios.interceptors.response.use(function (response) {
  // 统一处理接口相应错误，比如token过期无效、服务端异常等

  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default request