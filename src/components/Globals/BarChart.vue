<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['chartData', 'chartOptions'],
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
    this.htmlLegend = this.generateLegend()
  }
}
</script>

<style>
</style>
