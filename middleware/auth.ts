import app from "~/app.vue";
import Cookies from 'js-cookie'
import {token} from "~/helpers/globalVariable";


export default defineNuxtRouteMiddleware((to, from) => {
    const auth = authStore()
   if (token.value === undefined  ) {
       return navigateTo('/login')
   }
})