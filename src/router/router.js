import { createWebHashHistory, createRouter } from "vue-router";
import store from "../store/store";

const routes = [
    {
        path: "/",
        name: "landing",
        component: () => store.state.display.isMobile ? import('../components/Layout/mLayout.vue') : import('../components/Layout/layout.vue'),
        children: [
            {
                path: "",
                name: "home",
                component: () => store.state.display.isMobile ? import('../components/home/mHome.vue') : import('../components/home/home.vue'),
            },
            {
                path: "hot-event",
                name: "event",
                component: () => store.state.display.isMobile ? import('../components/event/mEvent.vue') : import('../components/event/event.vue'),
            },
            {
                path: "non-governmental-organization",
                name: "ngo",
                component: () => store.state.display.isMobile ? import('../components/ngo/mNgo.vue') : import('../components/ngo/ngo.vue')
            },
            {
                path: "resource",
                name: "resource",
                component: () => store.state.display.isMobile ? import('../components/resource/mResource.vue') : import('../components/resource/resource.vue')
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory("/PoliSciHub/"),
    routes,
});

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router;