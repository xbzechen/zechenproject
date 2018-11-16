import axios from './index.js'

// 获取验证码
export const getValidateCode = () => {
  const num = Math.ceil(Math.random() * 10)// 生成一个随机数（防止缓存）
  return axios.request({
    url: '/erpnew/validatecode?' + num,
    method: 'get',
    responseType: 'arraybuffer'
  })
}

// 登录
export const postLogin = (data) => {
  return axios.request({
    url: '/erpnew/login',
    method: 'post',
    data: data
  })
}

// 退出登录
export const postLoginCancel = () => {
  return axios.request({
    url: '/erpnew/loginCancel',
    method: 'post'
  })
}
