<template>
  <div class="">
    <Label for="name" align="left">用户：</Label>
    <TextBox v-model="name"></TextBox>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user')
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
          name: state => state.name
    }),
    message: {
      get () {
        return this.name
      }
    }
  }
}
</script>

<style>

</style>

