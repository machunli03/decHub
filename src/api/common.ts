
/** 
 * 公共基础接口封装
 */
import request from "@/utils/request";

export const getLoginInfo = () =>{
  // return request({
  //   method: 'GET',
  //   url: '/login/info'
  // })
  return request.get<
  {
    status: number //根据接口返回设置
    msg: string
    data: {
      a: number
      b: string
    }
  }>('/login/info')
} 