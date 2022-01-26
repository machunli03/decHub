
/** 
 * 公共基础接口封装
 */
import request from "@/utils/request";
import { ILoginInfo } from "./types/common";
// interface ResponseData<T = any> {
//   status: number
//   masg: string
//   data: T
// }
/** 
 * 手机登录
 */
export const phoneLogin = (query :any) => {
  return request<ILoginInfo>({
    method: 'post',
    url: '/api/phoneLogin?' + query
  })
}
/** 
 * 邮箱登录
 */
export const emailLogin = (query :any) => {
  return request<ILoginInfo>({
    method: 'post',
    url: '/api/emailLogin?' + query
  })
}
/** 
 * 获取图片验证码
 */
export const verificationCode = (data :any) => {
  return request<ILoginInfo>({
    method: 'post',
    url: '/api/verificationCode',
    params: data
  })
}
/** 
 * 发送短信验证码
 */
export const smsCode = (data :any) => {
  return request<ILoginInfo>({
    method: 'post',
    url: '/api/smsCode',
    params: data
  })
}
/** 
 * 手机+短信验证码登录
 */
export const mobileCodeLogin = (data :any) => {
  return request<ILoginInfo>({
    method: 'post',
    url: '/api/mobileCodeLogin',
    params: data
  })
}


export const getUserInfo = () => {
  return request<ILoginInfo>({
    method: 'post',
    url: '/api/get/service/limit'
  })
}

