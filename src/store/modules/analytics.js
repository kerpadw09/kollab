import axios from 'axios'

import {
  analyticsAPI
} from '@/api'

/**
 * @const state
 * @type {object}
 */
const state = {
  stats: null,
  branchPerformance: null,
  rewardsPerformance: null
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
  getAnalyticsStats: async (context, payload) => {
    try {
      var resp = await axios.get(analyticsAPI.getStats)
      context.commit('setStats', resp.data)
    } catch (error) {
      context.commit('setStats', null)
    }
  },
  getAnalyticsBranchPerformance: async (context, payload) => {
    try {
      var resp = await axios.get(analyticsAPI.getBranchPerformance)
      context.commit('setBranchPerformance', resp.data)
    } catch (error) {
      context.commit('setBranchPerformance', null)
    }
  },
  getAnalyticsRewardsPerformance: async (context, payload) => {
    try {
      var resp = await axios.get(analyticsAPI.getRewardsPerformance)
      context.commit('setRewardsPerformance', resp.data)
    } catch (error) {
      context.commit('setRewardsPerformance', null)
    }
  }
}

/**
 * @const mutations
 * @type {object}
 */
const mutations = {
  setStats: (state, data) => {
    state.stats = data
  },
  setBranchPerformance: (state, data) => {
    state.branchPerformance = data
  },
  setRewardsPerformance: (state, data) => {
    state.rewardsPerformance = data
  }
}

export default {state, actions, mutations}
