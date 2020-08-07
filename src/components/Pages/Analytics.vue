<template>
  <div id="analytics" class="container-fluid bg-whisper">
    <div class="row py-3 bg-white">
      <div class="col-12 px-5">
        <img src="~img/pie-chart.svg" id="pie-chart" class="mb-2 mr-2" alt="Icon" />
        <span class="h4">Analytics</span>
        <i
          class="fa fa-question-circle text-whisper ml-2"
          aria-hidden="true"
          data-toggle="tooltip"
          title="Information"
        ></i>
      </div>
    </div>
    <div class="row px-3 py-5">
      <div class="col-md-3 mb-4 mb-md-0">
        <div
          class="card"
          :class="{'active-border': activeStat === 'sales'}"
          @click="activeStat = 'sales'"
        >
          <div class="card-body">
            <p class="card-title">
              <span class="h5">Sales</span>
              <i
                class="fa fa-question-circle text-whisper ml-2"
                aria-hidden="true"
                data-toggle="tooltip"
                title="Information"
              ></i>
            </p>
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-column justify-content-center">
                <span class="badge badge-pill badge-malibu py-2 px-3">
                  <span class="h6">
                    20%
                    <i class="fa fa-arrow-up ml-1" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="d-flex flex-column text-right">
                <p class="text-spunpearl font-weight-bold mb-0">Lifetime Sales</p>
                <p>
                  <img src="~img/peso.svg" class="peso" alt="Icon" />
                  <span class="h5 text-secondary">175,000</span>
                </p>
                <p class="text-spunpearl font-weight-bold mb-0">Revenue Sales</p>
                <p>
                  <img src="~img/peso.svg" class="peso" alt="Icon" />
                  <span class="h5 text-secondary">170,000</span>
                </p>
              </div>
            </div>
          </div>
          <div class="card-footer d-flex flex-row justify-content-between">
            <span class="text-spunpearl font-weight-bold">Average Order Value</span>
            <span>
              <img src="~img/peso.svg" class="peso-small" alt="Icon" />
              <span class="text-spunpearl font-weight-bold">1,000.00</span>
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-4 mb-md-0">
        <div
          class="card"
          :class="{'active-border': activeStat === 'engagement'}"
          @click="activeStat = 'engagement'"
        >
          <div class="card-body">
            <h5 class="card-title">Engagement</h5>
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-column justify-content-center">
                <span class="badge badge-pill badge-algae-green py-2 px-3">
                  <span class="h6">
                    20%
                    <i class="fa fa-arrow-down ml-1" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="d-flex flex-column text-right">
                <p class="text-spunpearl font-weight-bold mb-0">Lifetime SMS</p>
                <p class="text-spunpearl font-weight-bold mb-0">Engagements</p>
                <p class="h5 text-secondary">285</p>
                <p class="text-spunpearl font-weight-bold mb-0">Daily Average</p>
                <p class="h5 text-secondary">57</p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <span class="text-spunpearl font-weight-bold">20% decreease in 30 days</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-4 mb-md-0">
        <div
          class="card"
          :class="{'active-border': activeStat === 'acquisition'}"
          @click="activeStat = 'acquisition'"
        >
          <div class="card-body">
            <h5 class="card-title">Acquisition</h5>
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-column justify-content-center">
                <span class="badge badge-pill badge-manhattan py-2 px-3">
                  <span class="h6">
                    20%
                    <i class="fa fa-arrow-up ml-1" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="d-flex flex-column text-right">
                <p class="text-spunpearl font-weight-bold mb-0">Registered Users</p>
                <p class="h5 text-secondary">285</p>
                <p class="text-spunpearl font-weight-bold mb-0">Daily Average</p>
                <p class="h5 text-secondary">57</p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <span class="text-spunpearl font-weight-bold">20% increease in 30 days</span>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div
          class="card"
          :class="{'active-border': activeStat === 'rewards program'}"
          @click="activeStat = 'rewards program'"
        >
          <div class="card-body">
            <h5 class="card-title">Rewards Program</h5>
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-column justify-content-center">
                <span class="badge badge-pill badge-biloba-flower py-2 px-3">
                  <span class="h6">
                    20%
                    <i class="fa fa-arrow-up ml-1" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="d-flex flex-column text-right">
                <p class="text-spunpearl font-weight-bold mb-0">Rewards Redeemed</p>
                <p class="h5 text-secondary">175,000</p>
                <p class="text-spunpearl font-weight-bold mb-0">Issued Rewards</p>
                <p class="h5 text-secondary">175,000</p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <span class="text-spunpearl font-weight-bold">20% increease in 30 days</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-3 py-3">
      <div class="col-md-2 mb-3 mb-md-0">
        <select class="custom-select" v-model="lastDays">
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
        </select>
      </div>
      <div class="col-md-3">
        <DatePicker mode="range" v-model="range" :masks="{ input: 'D MMM YYYY' }" />
        <i class="fa fa-calendar-alt text-whisper date-picker-icon" aria-hidden="true"></i>
      </div>
    </div>
    <div class="row px-3 py-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header py-3">
            <div class="row">
              <div class="col-md-8">
                <span class="h5">Sales Overview</span>
                <i
                  class="fa fa-question-circle text-whisper ml-2"
                  aria-hidden="true"
                  data-toggle="tooltip"
                  title="Information"
                ></i>
              </div>
              <div class="col-md-2 text-right">
                <select class="custom-select" v-model="transactionType">
                  <option value="0">All Transactions</option>
                  <option value="1">Sales</option>
                  <option value="2">Revenue</option>
                </select>
              </div>
              <div class="col-md-2 text-right">
                <select class="custom-select" v-model="branch">
                  <option value="0">All Branches</option>
                  <option value="1">Makati</option>
                  <option value="2">BGC Taguig</option>
                  <option value="3">Mall of Asia, Pasay</option>
                  <option value="4">Quezon City</option>
                  <option value="5">Greenhills</option>
                </select>
              </div>
            </div>
          </div>
          <div class="card-body px-0">
            <BarChart :chart-data="chartData" :chart-options="chartOptions" :styles="chartStyles" />
          </div>
        </div>
      </div>
    </div>
    <div class="row px-3 py-4">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header border-bottom-0 bg-light py-3">
            <span class="h5">Branch Performance</span>
            <i
              class="fa fa-question-circle text-whisper ml-2"
              aria-hidden="true"
              data-toggle="tooltip"
              title="Information"
            ></i>
          </div>
          <div class="card-body px-0">
            <table class="table bg-white border-bottom">
              <thead>
                <tr>
                  <th scope="col" class="border-top-0"></th>
                  <th scope="col" class="border-top-0">
                    <span class="text-spunpearl">Branch</span>
                  </th>
                  <th scope="col" class="text-right border-top-0">
                    <span class="text-spunpearl">
                      Total Sales (
                      <img src="~img/peso.svg" class="peso-small" alt="Icon" /> )
                    </span>
                  </th>
                  <th scope="col" class="border-top-0"></th>
                </tr>
              </thead>
              <tbody class="text-secondary font-weight-bold">
                <tr>
                  <td>1.</td>
                  <td>Makati</td>
                  <td class="text-right">5,000.00</td>
                  <td class="text-right">
                    20%
                    <i class="fa fa-arrow-up text-algae-green ml-2" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>BGC Taguig</td>
                  <td class="text-right">4,000.00</td>
                  <td class="text-right">
                    10.52%
                    <i class="fa fa-arrow-up text-algae-green ml-2" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Mall of Asia, Pasay</td>
                  <td class="text-right">3,000.00</td>
                  <td class="text-right">
                    8.39%
                    <i class="fa fa-arrow-up text-algae-green ml-2" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Quezon City</td>
                  <td class="text-right">2,000.00</td>
                  <td class="text-right">
                    5%
                    <i class="fa fa-arrow-down text-spunpearl ml-2" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Greenhills</td>
                  <td class="text-right">1,000.00</td>
                  <td class="text-right">
                    2%
                    <i class="fa fa-arrow-up text-algae-green ml-2" aria-hidden="true"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="container">
              <uib-pagination
                :total-items="totalItems"
                v-model="pagination"
                :max-size="maxSize"
                :boundary-link-numbers="false"
                :rotate="false"
                class="pagination-sm justify-content-end"
                :force-ellipses="true"
                previous-text="‹"
                next-text="›"
              ></uib-pagination>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header border-bottom-0 bg-light py-3">
            <span class="h5">Rewards Performance</span>
            <i
              class="fa fa-question-circle text-whisper ml-2"
              aria-hidden="true"
              data-toggle="tooltip"
              title="Information"
            ></i>
          </div>
          <div class="card-body px-0">
            <table class="table bg-white border-bottom">
              <thead>
                <tr>
                  <th scope="col" class="border-top-0"></th>
                  <th scope="col" class="border-top-0">
                    <span class="text-spunpearl">Badge</span>
                  </th>
                  <th scope="col" class="text-right border-top-0">
                    <span class="text-spunpearl">
                      Total Sales (
                      <img src="~img/peso.svg" class="peso-small" alt="Icon" /> )
                    </span>
                  </th>
                  <th scope="col" class="border-top-0"></th>
                </tr>
              </thead>
              <tbody class="text-secondary font-weight-bold">
                <tr>
                  <td>1.</td>
                  <td>Reward 1</td>
                  <td class="text-right">5,000.00</td>
                  <td class="text-right">
                    20%
                    <i class="fa fa-arrow-up text-algae-green ml-2" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Reward 2</td>
                  <td class="text-right">4,000.00</td>
                  <td class="text-right">
                    10.52%
                    <i class="fa fa-arrow-up text-algae-green ml-2" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Reward 3</td>
                  <td class="text-right">3,000.00</td>
                  <td class="text-right">
                    8.39%
                    <i class="fa fa-arrow-up text-algae-green ml-2" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Reward 4</td>
                  <td class="text-right">2,000.00</td>
                  <td class="text-right">
                    5%
                    <i class="fa fa-arrow-down text-spunpearl ml-2" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Reward 5</td>
                  <td class="text-right">1,000.00</td>
                  <td class="text-right">
                    2%
                    <i class="fa fa-arrow-up text-algae-green ml-2" aria-hidden="true"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="container">
              <uib-pagination
                :total-items="totalItems"
                v-model="pagination"
                :max-size="maxSize"
                :boundary-link-numbers="false"
                :rotate="false"
                class="pagination-sm justify-content-end"
                :force-ellipses="true"
                previous-text="‹"
                next-text="›"
              ></uib-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import BarChart from '@/components/Globals/BarChart'
export default {
  name: 'Analytics',
  components: {
    DatePicker,
    BarChart
  },
  data() {
    return {
      totalItems: 50,
      maxSize: 3,
      pagination: {
        currentPage: 1
      },
      range: {},
      lastDays: 7,
      activeStat: null,
      chartData: {
        labels: ['August 1', 'August 2', 'August 3', 'August 4', 'August 5', 'August 6', 'August 7'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: '#7DA2F9',
            data: [18000, 19000, 20000, 19000, 19500, 21000, 20000],
            categoryPercentage: 1.0,
            barPercentage: 0.5
          },
          {
            label: 'Revenue',
            backgroundColor: '#8EDDBB',
            data: [16000, 15000, 16000, 15500, 16000, 17000, 18000],
            categoryPercentage: 1.0,
            barPercentage: 0.5
          }
        ]
      },
      chartOptions: {
        width: 800,
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'index',
          intersect: false
        },
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          labels: {
            boxWidth: 15
          }
        },
        tooltips: {
          align: 'center'
        }
      },
      chartStyles: {
        backgroundColor: 'white'
      },
      transactionType: 0,
      branch: 0
    }
  },
  methods: {
    setRange(days) {
      this.range.start = new Date(moment().subtract(days, 'days').format('YYYY-MM-DDTHH:mm:ssZ'))
      this.range.end = new Date()
    }
  },
  watch: {
    lastDays(days) {
      this.range = {}
      this.setRange(days)
    }
  },
  created() {
    this.setRange(this.lastDays - 1)
  }
}
</script>

<style lang='scss'>
@import "scss/pages/analytics/base.scss";
</style>
