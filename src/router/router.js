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
                path: "article",
                name: "article",
                component: () => store.state.display.isMobile ? import('../components/article/mArticle.vue') : import('../components/article/article.vue'),
            },
            {
                path: "article/:articleKey",
                name: "article-detail",
                component: () => store.state.display.isMobile ? import('../components/article/mArticleDetail.vue') : import('../components/article/articleDetail.vue'),
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
    history: createWebHashHistory("/"),
    routes,
});

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router;