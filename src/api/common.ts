
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

export const getLoginInfo = () =>{
  return request<ILoginInfo>({
    method: 'GET',
    url: '/login/info'
  })
} 