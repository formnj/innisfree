export default defineNuxtPlugin(nuxtApp => {
    const router = useRouter(); // 라우터 인스턴스 가져오기

    router.beforeEach((to, from, next) => {
        const isLoggedIn = true; // 여기에 실제 로그인 상태를 체크하는 로직 구현
        const isLoginPage = to.path === '/login';

        if (!isLoggedIn && !isLoginPage) {
            // 로그인되지 않았고, 로그인 페이지가 아니면 로그인 페이지로 리디렉션
            next('/login');
        } else if (isLoggedIn && isLoginPage) {
            // 이미 로그인된 상태에서 로그인 페이지로 가려고 하면 홈으로 리디렉션
            next('/');
        } else {
            // 그 외의 경우는 페이지 전환을 그대로 진행
            next();
        }
    });
});
