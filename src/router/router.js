import { createWebHistory, createRouter } from "vue-router";
import store from "../store/store";
import Layout from "../components/Layout/layout.vue"
import mLayout from "../components/Layout/mLayout.vue"
import home from "../components/home/home.vue"
import ngo from "../components/ngo/ngo.vue"
import resource from "../components/resource/resource.vue"

const routes = [
    {
        path: "/PoliSciHub/",
        name: "landing",
        component: store.state.display.isMobile ? mLayout : Layout,
        children: [
            {
                path: "",
                name: "home",
                component: home
            },
            {
                path: "non-governmental-organization",
                name: "ngo",
                component: ngo
            },
            {
                path: "resource",
                name: "resource",
                component: resource
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router;