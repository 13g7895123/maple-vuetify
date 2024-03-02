const routes = [
    {
        path: "/",
        name: 'Home',
        component: () => import('../views/Home.vue'),
        children: [
            { path: "/frenzyTotem", component: () => import('../views/FrenzyTotem.vue')},
            { path: "/fashion", component: () => import('../views/Fashion.vue')},
            { path: "/gameCurrency", component: () => import('../views/GameCurrency.vue')},
            { 
                path: "/money",
                component: () => import('../views/Money.vue'),
                // children :[
                //     { path: "/bonus", component: () => import('../views/Bonus.vue')},
                // ]
            },
            { path: "/bonus", component: () => import('../views/Bonus.vue')},
            { path: "/test", component: () => import('../views/Test2.vue')},
        ]
    },
    {
        path: "/login",
        name: 'Login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: "/beanfun",
        name: 'beanfun',
        component: () => import('../views/BeanfunAccount.vue'),
    },
    {
        path: "/maple",
        name: 'maple',
        component: () => import('../views/MapleAccount.vue'),
    },
    {
        path: "/giftproduct",
        name: 'giftproduct',
        component: () => import('../views/GiftProduct.vue'),
    },
    // {
    //     path: '/:catchAll(.*)',
    //     name: '404',
    //     component: () => import('../views/404.vue')
    // }
]

export default routes