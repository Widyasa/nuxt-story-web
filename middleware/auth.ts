import app from "~/app.vue";
import Cookies from 'js-cookie'


export default defineNuxtRouteMiddleware((to, from) => {
    const auth = authStore()
    const userLogin = ref(Cookies.get('token'))
   if (userLogin.value === undefined  ) {
       return navigateTo('/login')
   }
})