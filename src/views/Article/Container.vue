<template>
  <div class="article-container">
    <router-view/>
  </div>
</template>

<style scoped lang="stylus">
@import '../../style/mix.styl';

.article-container {
  width: $article-container-width;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
