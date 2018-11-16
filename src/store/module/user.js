import { postLogin, postLoginCancel } from '@/api/login.js'
import { erpIndex } from '@/api/user.js'

const state = {
  isLogin: false
}

const getters = {

}

const mutations = {
  setIsLogin (state, isLogin) {
    state.isLogin = isLogin
  }
}

const actions = {
  // 登录
  handleLogin ({ commit }, { username, password, code }) {
    const data = {
      username, password, code
    }
    return new Promise((resolve, reject) => {
      postLogin(data).then(res => {
        if (res.data.code === '1') {
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
  // 判断用户是否登录
  isUserLogin ({ commit }) {
    return new Promise((resolve, reject) => {
      erpIndex().then(res => {
        if (res.data.code === '100') {
          commit('setIsLogin', true)
          resolve(res)
        } else {
          commit('setIsLogin', false)
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
        console.log('用户是否退出登录：')
        console.log(res.data)
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

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
