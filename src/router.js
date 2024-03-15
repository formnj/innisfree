import { createWebHistory, createRouter } from "vue-router";

// var path = '/';
if(window.location.hostname == 'formnj.github.io'){
    var path = '/innisfree/';
} else {
    var path = '/';
}

const routes = [
    {
        path: path, //기본 path이면
        component: () => import("@/layout/Guide_Wrap"),
        children: [
            {
                path: path,
                component: () => import("@/guide/components"),
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
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});