export default defineNuxtRouteMiddleware((to, from) => {
    // 로그인 상태 체크 로직 구현
    const isLoggedIn = false; // 실제 로그인 상태를 여기서 체크 (예: 쿠키, 로컬 스토리지, Vuex 스토어)

    if (!isLoggedIn) {
        // 로그인되지 않은 경우, 로그인 페이지로 리디렉트
        return navigateTo('/login');
    }

    // 로그인된 경우, 다음 미들웨어 혹은 요청된 페이지로 진행
});
