import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GLDemo from '../views/GLDemo/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gl_demo',
    name: 'GLDemo',
    component: GLDemo,
    redirect: '/gl_demo/normal',
    children: [
      {
        path: 'normal',
        name: 'normal',
        component: () => import('../views/GLDemo/GLViews/normal'),
      },
      {
        path: 'texture',
        name: 'texture',
        component: () => import('../views/GLDemo/GLViews/texture')
      },
      {
        path: 'threejs',
        name: 'threejs',
        component: () => import('../views/GLDemo/GLViews/threejs'),
      },
      {
        path: 'three-points',
        name: 'three-points',
        component: () => import('../views/GLDemo/GLViews/points'),
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    redirect: '/about/first',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: 'first',
        component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue'),
        children: [
          {
            path: 'index',
            component: () => import('../views/First.vue'),
          },
          {
            path: 'detail',
            component: () => import('../views/First1.vue')
          },
        ]
      },
      {
        path: 'second',
        component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue'),
      children: [
        {
          path: 'index',
          component: () => import('../views/Second.vue')
        }
      ]
      }
    ]
  },
  {
    path: '/test-page',
    component: () => import('../views/TestPage.vue')
  },
  {
    path: '/components',
    component: () => import('../views/Components.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
