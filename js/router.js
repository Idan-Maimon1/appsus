// import noteApp from './views/note-app.cmp.js';
// import emailApp from './views/email-app.cmp.js';
<<<<<<< HEAD
import homePage from './views/home-page.cmp.js'
=======
import homePage from './pages/app-home.cmp.js'

>>>>>>> 47df9731f82ee94f1c54b15afb4d61ebdf67a2a0

const routes = [
  {
    path: '/',
    component: homePage,
  },
  // {
  //     path: '/email',
  //     component: emailApp
  // },
  // {
  //     path: '/notes',
  //     component: noteApp
  // },
]

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
})
