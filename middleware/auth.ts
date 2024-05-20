import app from "~/app.vue";
import Cookies from 'js-cookie'
const userLogin = ref(Cookies.get('user'))
const auth = authStore()

export default defineNuxtRouteMiddleware((to, from) => {
   if (!auth.$state.isLogin || userLogin.value !== undefined) {
       return navigateTo('/login')
   }

   //  console.log(to)


})