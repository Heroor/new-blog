import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
import ArticleList from '@/views/Article/ArticleList'
import ArticleDetail from '@/views/Article/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Layout,
    children: [{
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    }, {
      path:'/article/*',
      name: 'article-detail',
      component: ArticleDetail
    }, {
      path: '/info',
      name: 'info',
      component: {
        template: '<div>info</div>'
      }
    }]
  }, {
    path: '*',
    nam: '404',
    component: {
      template: '<div>404</div>'
    }
  }]
})
