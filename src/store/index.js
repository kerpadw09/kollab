import Vue from 'vue'
import Vuex from 'vuex'

import analytics from './modules/analytics'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    analytics
  }
})
