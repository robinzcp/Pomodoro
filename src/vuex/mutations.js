import * as mutationType from './mutation_types'
import * as configType from '../config'
import Vue from 'vue'
function stateToggle(state, toggle) {
	state.isWorking = !state.isWorking

	if (toggle) {
		state.isWorking = true
	}
	if (state.isWorking) {
		Vue.noise.start()
	} else {
		Vue.noise.pause()
	}
	
	state.counter = state.isWorking ? configType.WORKING_TIME : configType.RESTING_TIME 
	
}

function tick(state) {
	if (state.counter === 0) {
		stateToggle(state)
	}
	state.counter--
}

export default {
	[mutationType.START](state) {
		state.isStarted = true
		state.isPaused = false
		state.isStoped = true
		state.interval = setInterval(() => tick(state), 1000)
		
		if (state.isWorking) {
			Vue.noise.start()
		}
	},
	[mutationType.PAUSE](state) {
		state.isStarted = true
		state.isPaused = true
		state.isStoped = false
		clearInterval(state.interval)
		Vue.noise.pause()
	},
	[mutationType.STOP](state) {
		state.isStarted = false
		state.isPaused = false
		state.isStoped = true
		stateToggle(state, true)
		clearInterval(state.interval)
		Vue.noise.stop()
	},
	[mutationType.TOGGLE_SOUND](state) {
		state.soundEnabled = !state.soundEnabled
		if(state.soundEnabled) {
			Vue.noise.start()
		} else {
			Vue.noise.pause()
		}
	}
}




















