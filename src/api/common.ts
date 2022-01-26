
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

export const accountLogin = (query: any) => {
  return request<ILoginInfo>({
    method: 'post',
    url: '/api/accountLogin?' + query
  })
}



export const iPLogin = (query: any) => {
  return request<ILoginInfo>({
    method: 'post',
    url: '/get/iplogin/auth?' + query
  })
}


export const getUserInfo = () => {
  return request<ILoginInfo>({
    method: 'post',
    url: '/api/get/service/limit'
  })
}

export const ipLogin = (data: any) => {
  return request<ILoginInfo>({
    method: 'post',
    url: '/api/get/iplogin/auth',
    params: data
  })
}




