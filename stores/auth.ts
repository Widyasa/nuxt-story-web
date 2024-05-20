import axios from "axios";

export const authStore = defineStore('useAuthStore', {
    state: () => ({
        loginOutput:{},
        isLogin: false
    }),
    actions: {
        async login (loginData:any) {{
            try {
                const {data} = await axios.post('auth/local', loginData)
                this.loginOutput = data.data
                this.isLogin = true
            } catch (e) {
                console.log(e)
            }
        }}
    }
})