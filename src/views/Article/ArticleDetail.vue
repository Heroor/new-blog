<script>
export default {
  functional: true,
  render(h, context) {
    const { id } = context.parent.$route.params
    return (
      <div class="detail__wrap">
        id: {id}
      </div>
    )
  }
}
</script>

<style scoped lang="stylus">
.detail__wrap
  // height 500px
  // border 1px solid #000
</style>
