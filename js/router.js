// import noteApp from './views/note-app.cmp.js';
// import emailApp from './views/email-app.cmp.js';
import homePage from './pages/app-home.cmp.js'


const routes = [
    {
        path: '/',
        component: homePage
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
    history: VueRouter.createWebHashHistory()
})