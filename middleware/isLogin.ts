import app from "~/app.vue";
import Cookies from 'js-cookie'
const userLogin = ref(Cookies.get('user'))


export default defineNuxtRouteMiddleware((to, from) => {
    const auth = authStore()
    const userLogin = ref(Cookies.get('token'))

    if (userLogin.value !== undefined && to.path === "/login" || to.path === "/register") {
        return navigateTo('/')
    }
})