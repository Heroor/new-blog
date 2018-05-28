<template>
  <div class="nav-wrap">
    <ul class="nav-ul">
      <li v-for="(v, i) in navList" :key="i">
        <router-link :to="v.link">
          {{v.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList: [{
          name: 'Home',
          link: '/'
        }, {
          name: 'Info',
          link: '/info'
        }]
      }
    }
  }

</script>

<style scoped lang="stylus">
  .nav-ul
    height 50px
    text-align center
    padding-bottom 18px
    font-size 15px
    background #89d4a7
    li
      display inline-block
      margin 0 12px
      a
        line-height 48px
        display inline-block
        padding 0 8px
        text-decoration none
        color #fff
</style>
