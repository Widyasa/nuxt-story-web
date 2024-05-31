import {defineStore} from "pinia";
import axios from "axios";
import {apiUrl} from "~/helpers/globalVariable";

export const categoryStore = defineStore('categoryStore', {
    state: () => ({
        categoryList: [],
    }),
    actions : {
        async getCategory() {
            const {data} = await axios.get(apiUrl + "/categories")
            this.categoryList = data.data
        }
    }
})