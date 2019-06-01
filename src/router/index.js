import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
Vue.use(Router)
const _import = require('./_import_' + process.env.NODE_ENV)
export const constantRouterMap = [
  {
    path: '/',
    name: '首页',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: _import('index/index')
      }
    ]
  },
  {
    path: '/photo',
    name: '照片墙',
    component: Layout,
    redirect: '/photo/index',
    children: [
      {
        path: '/photo/index',
        component: _import('photo/index')
      }
    ]
  },
  {
    path: '/book',
    name: '书影集',
    component: Layout,
    redirect: '/book/index',
    children: [
      {
        path: '/book/index',
        component: _import('book/index')
      }
    ]
  },
  {
    path: '/food',
    name: '美食',
    component: Layout,
    redirect: '/food/index',
    children: [
      {
        path: '/food/index',
        component: _import('food/index')
      }
    ]
  },
  {
    path: '/clothes',
    name: '服装',
    component: Layout,
    redirect: '/clothes/index',
    children: [
      {
        path: '/clothes/index',
        component: _import('clothes/index')
      }
    ]
  },
  {
    path: '/cat',
    name: '喵喵与柴柴',
    component: Layout,
    redirect: '/cat/index',
    children: [
      {
        path: '/cat/index',
        component: _import('cat/index')
      }
    ]
  },
  {
    path: '/challage',
    name: '挑战',
    component: Layout,
    redirect: '/challage/index',
    children: [
      {
        path: '/challage/index',
        component: _import('challage/index')
      }
    ]
  }
]

export default new Router({
  mode: 'hash',
  routes: constantRouterMap
})
