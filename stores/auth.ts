import axios from "axios";
import {apiUrl} from "~/helpers/globalVariable";
import Cookies from "js-cookie";
import {useLocalStorage} from "@vueuse/core";

export const authStore = defineStore('useAuthStore', {
    state: () => ({
        loginOutput:{},
        isLogin: false,
    }),
    persist:true,
    actions: {
        async login (loginData:any) {
            try {
                this.isLogin = true
                const {data} = await axios.post(apiUrl + 'auth/local', loginData,
                    {
                            headers: {'Content-Type': 'multipart/form-data'}
                        }
                )
                this.loginOutput = data.data
                console.log(data.data)
                Cookies.set('token', this.loginOutput.jwt)
                Cookies.set('user', this.loginOutput.user.name)
                // Cookies.set('user', this.loginOutput.user.name)
            } catch (e) {
                console.log(e)
            }
        },
        async register (registerData:any) {
            try{
                const {data} = await axios.post(apiUrl + 'auth/local/register', registerData,
                    {
                        headers: {'Content-Type': 'multipart/form-data'}
                    })
                this.loginOutput = data.data
                this.isLogin = true
                console.log(data.data)
                Cookies.set('token', this.loginOutput.jwt)
                Cookies.set('user', this.loginOutput.user.name)
            } catch (e) {
                console.error(e)
            }
        },
        async logout() {
            this.isLogin = false
            Cookies.remove('token')
            Cookies.remove('user')
            Cookies.remove('useAuthStore')
            location.reload()
            return navigateTo('/login')
        }
    }
})