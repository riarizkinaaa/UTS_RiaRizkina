import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/DetailFootBallView.vue'
import Daftar from '../views/DaftarView.vue'

const routes = [{
        path: '/jadwal/pertandingan',
        name: 'home',
        component: HomeView
    },
    {
        path: '/detail/:id',
        component: Detail,
        props: true
    },
    {
        path: '/pertandingan',
        component: Daftar,
        props: true
    },

    {
        path: '/',
        name: 'club',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/FootBallView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router