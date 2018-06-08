<template>
  <div class="main-container">
    <router-view/>
  </div>
</template>

<style scoped lang="stylus">
@import '../style/mix.styl';

.main-container {
  max-width: $container-width;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
