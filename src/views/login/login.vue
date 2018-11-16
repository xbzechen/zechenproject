<template>
  <div class="log-box" :style="{width:allWidth + 'px', height:allHeight + 'px'}">
    <Form class="log-form" ref="userForm" :model="user" :rules="rules" :style="{marginTop: getMargin + 'px'}">
      <h1>{{ title }}</h1>
      <div class="log-form-item">
        <Label for="name" align="left">用户：</Label>
        <TextBox inputId="name" name="name" v-model="user.name"></TextBox>
        <span class="error" v-if="errorName != ''">{{ errorName }}</span>
      </div>
      <div class="log-form-item">
        <Label for="pwd" align="left">密码：</Label>
        <PasswordBox inputId="pwd" name="pwd" v-model="user.pwd"></PasswordBox>
        <span class="error" v-if="errorPwd != ''">{{ errorPwd }}</span>
      </div>
      <div class="log-form-item">
        <Label for="code" align="left">验证码：</Label>
        <TextBox inputId="pwd" name="pwd" v-model="user.code"></TextBox>
        <img :src="imgValidateCode" @click="verSrc" class="log-form-img"/>
        <span class="error">{{ errorCode }}</span>
      </div>
      <div class="log-form-item">
        <LinkButton class="btn btn-xs btn-primary log-form-btn" @click="submitUser()">登录</LinkButton>
      </div>
    </Form>
  </div>
</template>

<script>
import './login.css'
import { getValidateCode } from '@/api/login.js'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')

export default {
  data () {
    return {
      user: {
        name: '1',
        pwd: '123456a',
        code: ''
      },
      rules: {
        name: "required",
        pwd: "required",
        code: "required"
      },
      errorName: '',
      errorPwd: '',
      errorCode: '',
      allHeight: this.$store.state.allHeight,
      allWidth: this.$store.state.allWidth,
      title: 'ERP信息化管理系统',
      imgValidateCode: '', // 验证码路径
    }
  },
  computed: {
    getMargin () {
      return (this.allHeight - 400)/2
    }
  },
  methods: {
    ...mapActions(['handleLogin', 'isUserLogin']),
    // 登录
    submitUser () {
      if( this.user.name === '' ) this.errorName = "请输入用户名"
      if( this.user.pwd === '') this.errorPwd = "请输入密码"
      if( this.user.code === '') this.errorCode = "请输入验证码"
      // 方法一
      // const qs = require('qs')
      // const data = qs.stringify({
      //   username: this.user.name,
      //   password: this.user.pwd,
      //   code: this.user.code
      // })
      // 方法二
      // var data = new URLSearchParams()
      // data.append('username', this.user.name);
			// data.append('password', this.user.pwd);
      // data.append('code', this.user.code)
      this.handleLogin({username: this.user.name, password: this.user.pwd, code: this.user.code}).then((res) => {
        console.log(res)
        if (res.data.code === '1') {
          this.$router.push({ name: 'home'})
        } else {
          console.log(res.data)
          this.verSrc()
          this.user.name=""
          this.user.pwd=""
          this.user.code=""
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 获取验证码
    verSrc () {
      getValidateCode().then(res => {
        const captchaId = res.headers['x-ocp-captcha-id']
        const tmpCodeImage =  'data:image/png;base64,' + btoa(
          new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        )
        this.imgValidateCode = tmpCodeImage
      })
    }
  },
  mounted () {
    this.verSrc()
  },
  created () {
    this.isUserLogin().then((res) => {
      if (res.data.code === '100') {
        this.$router.push({ name: 'home'})
      }
    })
    // this.$store.commit('user/setIsLogin', true)
    // this.$router.push({ name: 'home'})
  }
}
</script>

<style scoped>

</style>
