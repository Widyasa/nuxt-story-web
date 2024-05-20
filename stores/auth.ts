import axios from "axios";
import {apiUrl} from "~/helpers/globalVariable";

export const authStore = defineStore('useAuthStore', {
    state: () => ({
        loginOutput:{},
        isLogin: false
    }),
    actions: {
        async login (loginData:any) {{
            try {
                const {data} = await axios.post(apiUrl + 'auth/local', loginData,
                    {
                            headers: {'Content-Type': 'multipart/form-data'}
                        }
                )
                this.loginOutput = data.data
                this.isLogin = true
            } catch (e) {
                console.log(e)
            }
        }}
    }
})