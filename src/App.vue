<template>
  <div>
    <Header />
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Globals/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang='scss'>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  @import 'scss/main.scss';
</style>
