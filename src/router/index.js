import VueRouter from "vue-router";

const router = new VueRouter({
    mode:"history",
    base:process.env.BASE_URL,
    routes:[
        {
            name:'Home',
            path:'/',
            component:() => import('../views/Home'),
        },
        {
            name:'Post',
            path:'/post',
            component:() => import('../views/Post'),
        },
        {
            name:'My',
            path:'/my',
            component:() => import('../views/Mine')
        },
        {
            name:'Detail',
            path:'/detail',
            component:() => import('../views/Detail')
        }
    ]
})

export default router