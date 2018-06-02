<template>
  <div>
    id: {{id}}
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.path.split('/')[2]
    }
  }
}
</script>

<style>

</style>
