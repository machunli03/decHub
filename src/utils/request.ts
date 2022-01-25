import axios, { AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
import Cookies from "js-cookie";
const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASEURL //url
})
//请求拦截器
axios.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  config.headers!.Authorization = `Bearer ${Cookies.get('token')}`;
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
//响应拦截器
axios.interceptors.response.use(function (response) {
  // 统一处理接口相应错误，比如token过期无效、服务端异常等
  if (response.data.status && response.data.status != 200) {
    ElMessage.error(response.data.msg || '请求失败，请稍后重试~')
    //手动返回promise异常
    return Promise.reject(response.data)
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data || res.data) as T
  })
}