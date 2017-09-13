import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Entry from '@/components/Entry'
const Error404 = () =>
    import ('@/components/pages/Error/404')
    // const Home = () =>
    //     import ('@/components/pages/Home')
    // const Mytask = () =>
    //     import ('@/components/pages/Mytask')
    // const Page1 = () =>
    //     import ('@/components/pages/Page1')
    // const Page1_1 = () =>
    //     import ('@/components/pages/Page1/page1-1')
    // const Page2 = () =>
    //     import ('@/components/pages/Page2')
    // const Page3 = () =>
    //     import ('@/components/pages/Page3')

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Entry',
        component: Entry,
        children: [{
                path: 'home',
                name: 'Home',
                component: () =>
                    import ('@/components/pages/Home')
            },
            {
                path: 'mytask',
                name: 'Mytask',
                component: () =>
                    import ('@/components/pages/Mytask')
            },
            {
                path: 'page1',
                // name: 'Page1',
                component: () =>
                    import ('@/components/pages/Page1'),
                children: [{
                        path: '',
                        name: 'Page1_0',
                        redirect: 'page1-1'
                    },
                    {
                        path: 'page1-1',
                        name: 'Page1_1',
                        component: () =>
                            import ('@/components/pages/Page1/page1-1')
                    },
                    {
                        path: '*',
                        name: 'error404_L2',
                        component: Error404
                    }
                ]
            },
            {
                path: 'page2',
                name: 'Page2',
                component: () =>
                    import ('@/components/pages/Page2')
            },
            {
                path: 'page3',
                name: 'Page3',
                component: () =>
                    import ('@/components/pages/Page3')
            },
            {
                path: '*',
                name: 'error404_L1',
                component: Error404
            }
        ]
    }]
})