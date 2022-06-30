import appHome from './pages/app-home.cmp.js'
import mail from './apps/mail/pages/mail-index.cmp.js'
import keep from './apps/keep/pages/note-index.cmp.js'

const routes = [
  {
    path: '/',
    component: appHome,
  },
  {
    path: '/mail',
    component: mail,
  },
  {
    path: '/keep',
    component: keep
  },
]

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
})
