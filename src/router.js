import { createWebHistory, createRouter } from "vue-router";

var path = '/';

const routes = [
    {
        path: path+"guide/", //기본 path이면
        component: () => import("@/layout/Guide_Wrap"),
        children: [
            {
                path: path+"guide/list",
                component: () => import("@/guide/list"),
            },{
                path: path+"guide/components", //기본 path이면
                component: () => import("@/guide/components"),
            }
        ]
    }, {
        path: path,
        component: () => import("@/layout/Wrap"),
        children: [
            {
                path: path,
                component: () => import("@/views/main")
            }
        ]
    }, {
        path: path+":pathMatch(.*)*", //매칭되는 path가 없는 경우
        component: () => import("@/views/notFound")
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});