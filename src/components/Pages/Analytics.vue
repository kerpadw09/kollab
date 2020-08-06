<template>
  <div id="analytics" class="container">
    <div class="row my-4">
      <div class="col-12">
        <img src="~img/pie-chart.svg" id="pie-chart" class="mb-2 mr-2" alt="Icon">
        <span class="h5">
          Analytics
        </span>
        <i class="fa fa-question-circle text-seashell ml-2" aria-hidden="true"></i>
      </div>
    </div>
    <div id="content" class="row">
      <div class="col">
        hello
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Analytics',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss'>
  @import 'scss/pages/analytics/base.scss';
</style>
