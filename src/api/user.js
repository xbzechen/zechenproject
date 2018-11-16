import axios from './index.js'

// 用户登陆状态
export const erpIndex = () => {
  console.log("axios-isLoginMain",axios)
  return axios.request({
    url: '/erpnew/isLoginMain',
    method: 'get'
  })
}
