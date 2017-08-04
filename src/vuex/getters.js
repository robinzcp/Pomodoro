export default {
	isWorking: state => state.isWorking,
	isPaused: state => state.isPaused,
	isStarted: state => state.isStarted,
	isStoped: state => state.isStoped,
	counter: state => state.counter,
	min: state => Math.floor(state.counter / 60),
	sec: state => state.counter % 60,
	isSoundEnabled: state => state.isSoundEnabled
}