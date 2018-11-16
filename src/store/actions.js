import { postLogin, postLoginCancel } from '@/api/login.js'
export default {
  // 登录
  handleLogin ({ commit }, { username, password, code }) {
    const data = {
      username, password, code
    }
    return new Promise((resolve, reject) => {
      postLogin(data).then(res => {
        if (res.data.code === '1') {
          console.log(res.data.data)
          resolve(res)
        } else if (res.data.code === '100') {
          commit('setIsLogin', true)
          resolve(res)
        } else {
          resolve(res)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },

  // 退出登录
  handleLogOut ({ commit }) {
    return new Promise((resolve, reject) => {
      postLoginCancel().then((res) => {
        console.log(res)
        if (res.data.code === '1') {
          commit('setIsLogin', false)
          resolve(res)
          alert('退出登录')
        } else {
          resolve(res)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}
