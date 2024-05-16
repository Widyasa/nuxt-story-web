import {defineStore} from "pinia";
import axios from "axios";
import {apiUrl} from "~/helpers/globalVariable";

export const storyStore = defineStore('storyStore', {
    state : () => ({
        storyList : []  ,
        pages: ref(1)
    }),
    actions : {
        async getStory() {
            const {data} = await axios.get(apiUrl + `stories?keyword&author&page=${this.pages}`)
            if (this.pages > 1) {

                data.data.forEach(item => this.storyList.push(item))
            } else {
                this.storyList = data.data
            }
        }
    }
})