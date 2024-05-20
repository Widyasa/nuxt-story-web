import app from "~/app.vue";
import Cookies from 'js-cookie'
const userLogin = ref(Cookies.get('user'))


export default defineNuxtRouteMiddleware((to, from) => {
    const auth = authStore()
    if (auth.isLogin && to.path === "/login") {
        return navigateTo('/')
    }
})