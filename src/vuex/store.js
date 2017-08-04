import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import * as configTypes from '../config'

Vue.use(Vuex)

const state = {
	isWorking: true,
	isStarted: false,
	isPaused: false,
	isStoped: false,
	counter: configTypes.WORKING_TIME,
	interval: null,
	isSoundEnabled: true
}

export default new Vuex.Store({
	state, getters, mutations, actions
})