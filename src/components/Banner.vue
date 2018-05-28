<template>
  <div :class="{
      'banner-wrap': true,
      'hidden': !bannerSrc
    }">
    <div class="banner-container position--align">
      <img :src="bannerSrc" ondragstart="return false" class="transition-05">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bannerSrc: '123',
        title: 'title',
        desc: 'desc'
      }
    }
  }

</script>

<style scoped lang="styl">
  .banner-wrap
    position relative
    top -20px
    height 18px
    &.hidden
      overflow hidden
    .banner-container
      height 420px
      min-height 18px
      width 280%
      border-radius 50% 50% 0 0
      background #eef7f7
</style>
