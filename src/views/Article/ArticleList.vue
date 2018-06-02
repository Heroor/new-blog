<script>
  export default {
    functional: true,
    props: {
      articleList: {
        type: Array,
        default() {
          return [{
            title: 'one',
            poster: 'https://blog.benjavan.top/static/images/avatar.jpg',
            desc: 'this is a article',
            date: '2018-12-12',
            id: '1'
          }, {
            title: 'two',
            desc: 'this is a article too',
            date: '2018-12-31',
            id: '2'
          }, {
            title: '中文',
            poster: 'https://blog.benjavan.top/static/images/avatar.jpg',
            desc: 'this is a article too',
            date: '2018-12-33',
            id: '3'
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
                  <h2 class="w-b--b-a">
                    <router-link to={'article/' + v.id} class="article__title">{v.title}</router-link>
                  </h2>
                  <div class="article__content">
                    <div class="article__left">
                      <p class="article__desc w-b--b-a">{v.desc}</p>
                      <span class="article__date">{v.date}</span>
                    </div>
                    {
                      v.poster &&
                      <div class="article__right">
                        <img class="article__img" src={v.poster} alt=""/>
                      </div>
                    }
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
      border-radius 6px
      background-color #fff
      transition(.3s)
      &:hover
        box-shadow 0 0 30px rgba(35, 180, 226, 0.2)
      h2
        text-align center
        margin-bottom 30px
  .article__title
    display inline-block
    font-size $font-title
    transition(.4s)
    color $font-color-title
    &:hover
      color $nav-bg
  .article__content
    display flex
    min-height 80px
  .article__left
    display flex
    flex 1
    flex-direction column
    transition(.4s)
  .article__desc
    flex 1
    margin-bottom 20px
    font-size $font-content
    color $font-color-content
  .article__date
    font-size $font-tips
    color #858585
  .article__right
    margin-left 20px
  .article__img
    transition(.4s)
    display block
    max-width 180px
    max-height 180px
    border-radius 10px
    // @media screen and (max-width 760px){
      // width 20px
    // }
</style>

