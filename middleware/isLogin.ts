import app from "~/app.vue";
import Cookies from 'js-cookie'
const userLogin = ref(Cookies.get('user'))


export default defineNuxtRouteMiddleware((to, from) => {
    const auth = authStore()
    const userLogin = ref(Cookies.get('token'))

    if (userLogin.value !== undefined && to.path === "/login") {
        return navigateTo('/')
    }
    if (userLogin.value !== undefined && to.path === "/register") {
        return navigateTo('/')
    }
})