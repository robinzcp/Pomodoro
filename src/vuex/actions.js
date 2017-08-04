import * as mutationTypes from './mutation_types'

export default {
	start: ({ commit }) => {
		commit(mutationTypes.START)
	},
	stop: ({ commit }) => {
		commit(mutationTypes.STOP)
	},
	pause: ({ commit }) => {
		commit(mutationTypes.PAUSE)
	},
	toggleSound: ({ commit }) => {
		commit(mutationTypes.TOGGLE_SOUND)
	}
}