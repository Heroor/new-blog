<script>
  export default {
    functional: true,
    props: {
      articleList: {
        type: Array,
        default() {
          return [{
            title: 'one',
            poster: '123',
            desc: 'this is a article',
            id: '1'
          }]
        }
      }
    },
    render(h, context) {
      const { articleList } = context.props
      return (
        <div class="article-wrap">
          <ul class="article__ul">
            {
              articleList.map((v, i) =>
                <li key={i}>
                  <router-link to={v.id} class="article__title">
                    <h2 class="w-b__b-a">{v.title}</h2>
                  </router-link>
                  <div class="article__content">
                    <p class="article__desc">{v.desc}</p>
                    <img class="article__img" src={v.poster}/>
                  </div>
                </li>
              )
            }
          </ul>
        </div>
      )
    }
  }

</script>

<style scoped lang="stylus">
  @import "../../style/mix.styl"
  .article-wrap
    max-width $article-list-width
    margin 20px auto
    padding 0 10px
  .article__ul
    padding-bottom 200px
    li
      margin-top 25px
      padding 30px
      border-radius 5px
      background-color #fff
      transition all .3s
      .article__title
        color $font-color-title
      .article__content
        display flex
        .article__desc
          flex 1
          color $font-color-content
        .article__img
          width 180px
          height 180px
</style>

