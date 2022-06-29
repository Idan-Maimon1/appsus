<<<<<<< HEAD
// import noteApp from '';
// import emailApp from '';
import appHome from './pages/app-home.cmp.js'
=======
// import noteApp from './views/note-app.cmp.js';
// import emailApp from './views/email-app.cmp.js';
<<<<<<< HEAD
import homePage from './views/home-page.cmp.js'
=======
import homePage from './pages/app-home.cmp.js'
>>>>>>> c06406a069acde47b91efdb916c024c6393e01d8

>>>>>>> 47df9731f82ee94f1c54b15afb4d61ebdf67a2a0

const routes = [
<<<<<<< HEAD
    {
        path: '/',
        component: appHome
    },
    // {
    //     path: '/email',
    //     component: emailApp
    // },
    // {
    //     path: '/notes',
    //     component: noteApp
    // },
=======
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
>>>>>>> c06406a069acde47b91efdb916c024c6393e01d8
]

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
})
