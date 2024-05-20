import app from "~/app.vue";
import Cookies from 'js-cookie'
const userLogin = ref(Cookies.get('user'))


export default defineNuxtRouteMiddleware((to, from) => {
    const auth = authStore()
   if (!auth.isLogin) {
       return navigateTo('/login')
   }
})