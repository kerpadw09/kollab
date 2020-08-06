<template>
  <div id="analytics" class="container-fluid">
    <div class="row my-3">
      <div class="col-12 px-5">
        <img src="~img/pie-chart.svg" id="pie-chart" class="mb-2 mr-2" alt="Icon" />
        <span class="h4">Analytics</span>
        <i class="fa fa-question-circle text-whisper ml-2" aria-hidden="true"></i>
      </div>
    </div>
    <div class="row px-3 py-4 bg-whisper">
      <div class="col-md-3 mb-4 mb-md-0">
        <div class="card">
          <div class="card-body">
            <p class="card-title">
              <span class="h5">Sales</span>
              <i class="fa fa-question-circle text-whisper ml-2" aria-hidden="true"></i>
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
            <span class="text-spunpearl font-weight-bold">
              Average Order Value
            </span>
            <span>
              <img src="~img/peso.svg" class="peso-small" alt="Icon" />
              <span class="text-spunpearl font-weight-bold">
                1,000.00
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-4 mb-md-0">
        <div class="card">
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
                <p class="text-spunpearl font-weight-bold mb-0">
                  Lifetime SMS
                </p>
                <p class="text-spunpearl font-weight-bold mb-0">
                  Engagements
                </p>
                <p class="h5 text-secondary">
                  285
                </p>
                <p class="text-spunpearl font-weight-bold mb-0">
                  Daily Average
                </p>
                <p class="h5 text-secondary">
                  57
                </p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <span class="text-spunpearl font-weight-bold">
              20% decreease in 30 days
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-4 mb-md-0">
        <div class="card">
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
                <p class="h5 text-secondary">
                  285
                </p>
                <p class="text-spunpearl font-weight-bold mb-0">Daily Average</p>
                <p class="h5 text-secondary">
                  57
                </p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <span class="text-spunpearl font-weight-bold">
              20% increease in 30 days
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
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
                <p class="h5 text-secondary">
                  175,000
                </p>
               <p class="text-spunpearl font-weight-bold mb-0">Issued Rewards</p>
                <p class="h5 text-secondary">
                  175,000
                </p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <span class="text-spunpearl font-weight-bold">
              20% increease in 30 days
            </span>
          </div>
        </div>
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
@import "scss/pages/analytics/base.scss";
</style>
