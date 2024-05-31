import app from "~/app.vue";
import Cookies from 'js-cookie'
import {token} from "~/helpers/globalVariable";
import {useLocalStorage} from "@vueuse/core";


export default defineNuxtRouteMiddleware((to, from) => {
    const auth = authStore()
    if (token.value !== undefined) {
        auth.isLogin = true
    }
    if (!auth.isLogin) {
        return navigateTo('/login')
    }
    if (token.value !== undefined) {
        auth.isLogin = true
    }
})