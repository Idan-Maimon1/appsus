// import noteApp from '';
// import emailApp from '';
import appHome from './pages/app-home.cmp.js'


const routes = [
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
]

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
})
