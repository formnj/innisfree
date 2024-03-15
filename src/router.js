import { createWebHistory, createRouter } from "vue-router";

// var path = '/';
if(window.location.hostname == 'formnj.github.io'){
    var path = '/innisfree/';

    const routes = [
        {
            path: path,
            component: () => import("@/layout/Wrap"),
            children: [
                {
                    path: path+"guide",
                    component: () => import("@/guide/list"),
                },{
                    path: path+"guide/components",
                    component: () => import("@/guide/components"),
                },{
                    path: path+"guide/swiper",
                    component: () => import("@/guide/swiper"),
                }
            ]
        }
    ];
} else {
    var path = '/';

    const routes = [
        {
            path: path,
            component: () => import("@/layout/Wrap"),
            children: [
                {
                    path: path,
                    component: () => import("@/views/main")
                }
            ]
        }, {
            path: path+"guide", //기본 path이면
            component: () => import("@/layout/Guide_Wrap"),
            children: [
                {
                    path: path+"guide",
                    component: () => import("@/guide/list"),
                },{
                    path: path+"guide/components",
                    component: () => import("@/guide/components"),
                },{
                    path: path+"guide/swiper",
                    component: () => import("@/guide/swiper"),
                }
            ]
        }, {
            path: path+":pathMatch(.*)*", //매칭되는 path가 없는 경우
            component: () => import("@/layout/Wrap"),
            children: [
                {
                    path: path+":pathMatch(.*)*",
                    component: () => import("@/views/notFound"),
                }
            ]
        }, {
            path: path+"hgkim", //hgkim layout
            component: () => import("@/hgkim/HG_Wrap"),
            children: [
                {
                    path: path+"hgkim",
                    component: () => import("@/hgkim/main"),
                }
            ]
        }
    ];
}

export const router = createRouter({
    history: createWebHistory(),
    routes
});