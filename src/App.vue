<template>
  <div>
    <Header />
    <div id="app">
      <router-view/>
      <loading :active.sync="isLoading" color="#FFC107"></loading>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Globals/Header'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'App',
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    Header,
    Loading
  },
  created () {
    this.$root.$on('showLoader', isLoading => {
      this.isLoading = isLoading
    })
  }
}
</script>

<style lang='scss'>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  @import 'scss/main.scss';
</style>
