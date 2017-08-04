<template>
  <span>
    <button title="start" :disabled="isStarted && !isPaused" @click="start">
      <i class="glyphicon glyphicon-play"></i>
    </button>
    <button title="pause" :disabled="!isStarted || isPaused" @click="pause">
      <i class="glyphicon glyphicon-pause"></i>
    </button>
    <button title="stop"  :disabled="!isStarted" @click="stop">
      <i class="glyphicon glyphicon-stop"></i>
    </button>
    <i class="toggle-volumn glyphicon" v-show="isStarted && !isPause && isWorking" :class="{ 'glyphicon-volume-off': isSoundEnabled, 'glyphicon-volume-up': !isSoundEnabled }" @click="toggleSound"></i>
  </span>
</template>

<style scoped>
  button:disabled i {
    color: gray;
  }
  .toggle-volume {
    float: right;
    cursor: pointer;
  }
</style>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    computed: mapGetters(['isStarted', 'isPaused', 'isStoped', 'isSoundEnabled', 'isWorking']),
    methods: mapActions(['start', 'pause', 'stop', 'toggleSound'])
  }
</script>
