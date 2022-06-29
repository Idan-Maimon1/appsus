// import emailApp from '';
import keep from './apps/keep/pages/note-index.cmp.js'
import appHome from './pages/app-home.cmp.js'

const routes = [
  {
    path: '/',
    component: appHome,
  },
  // {
  //     path: '/email',
  //     component: emailApp
  // },
  {
    path: '/notes',
    component: keep,
  },
]

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
})
