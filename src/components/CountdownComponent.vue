<template>
  <div class="well">
    <div class="pomodoro-timer">
      <span>{{ min | leftpad }}:{{ sec | leftpad }}</span>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
  export default {
    computed: {
      min() {
        return this.$store.getters.min
      },
      sec() {
        return this.$store.getters.sec
      }
    }
  }
</script>
