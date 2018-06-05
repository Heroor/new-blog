import Vue from 'vue'
import Router from 'vue-router'
import ArticleContainer from '@/views/Article/Container.vue'
import Layout from '@/views/Layout.vue'

const _import = path => () => import('@/views/' + path)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Layout,
    children: [{
      path: '/',
      redirect: '/article',
      alias: '/article',
      component: ArticleContainer,
      children: [{
        path: '/article',
        name: 'ArticleList',
        component: _import('Article/ArticleList')
      }, {
        path: '/article/:id',
        name: 'article-detail',
        component: _import('Article/ArticleDetail')
      }]
    }, {
      path: '/info',
      name: 'info',
      component: {
        template: '<div>info page</div>'
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
