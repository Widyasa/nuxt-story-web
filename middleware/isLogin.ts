import app from "~/app.vue";
import Cookies from 'js-cookie'

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = authStore()
    const token = ref(Cookies.get('token'))

    if (token.value !== undefined && to.path === "/login") {
        return navigateTo('/')
    }
    if (token.value !== undefined && to.path === "/register") {
        return navigateTo('/')
    }
})