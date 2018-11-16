<template>
  <div>
    <div class="all-logo-con">
      <img class="all-logo" src="@/assets/img/main_logo.png" alt="logo">
      <span>兴博咨询管理有限公司</span>
      <!-- <button class="all-navbar-minimalize btn btn-primary" onclick="leftToggle()">
        <i class="fa fa-bars"></i>
      </button> -->
    </div>
    <ul class="all-navbar-right">
      <!-- <li><a id="fsbutton" href="javascript:void(0)"><i class="fa fa-expand icon white"></i></a></li> -->
      <li><a href="javascript:void(0)" class="white" @click="logout"><i class="fa fa-arrow-left icon white"></i> 退出</a></li>
    </ul>
  </div>
</template>

<script>
import './header-bar.css'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')
export default {
  name: 'headerBar',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['handleLogOut']),
    logout () {
      this.handleLogOut().then((res) => {
        if(res.data.code === '1') {
          this.$router.push({
            name: 'login'
          })
        } else {
          this.$messager.alert({
            msg: res.data.errMsg
          })
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
