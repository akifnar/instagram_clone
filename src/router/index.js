import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/DirectView',
    name: 'Direct',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/DirectView/index')
  },
  {
    path: '/ExploreView',
    name: 'Explore',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/ExploreView/index')
  },
  {
    path: '/ProfileView',
    name: 'Profile',
    component: () =>
      import(
        /* webpackChunkName: "profile" */ '../views/ProfileView/index.vue'
      ),
    children: [
      {
        path: '',
        name: 'ProfilePost',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/ProfileView/post')
      },
      {
        path: 'igtv',
        name: 'ProfileIGTV',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/ProfileView/igtv')
      },
      {
        path: 'save',
        name: 'ProfileSave',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/ProfileView/save')
      },
      {
        path: 'tag',
        name: 'ProfileTag',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/ProfileView/tag')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
