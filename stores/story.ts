import {defineStore} from "pinia";
import axios from "axios";
import {apiUrl} from "~/helpers/globalVariable";

export const storyStore = defineStore('storyStore', {
    state : () => ({
        storyList : []  ,
        pages: ref(1),
        keyword: ref('')
    }),
    actions : {
        async getStory() {
            const {data} = await axios.get(apiUrl + `stories?keyword=${this.keyword}&author&page=${this.pages}`)
            if (this.pages > 1) {

                data.data.forEach(item => this.storyList.push(item))
            } else {
                this.storyList = data.data
            }
        },
        async searchStory() {
            const {data} = await axios.get(apiUrl + `stories?keyword=${this.keyword}&author&page`)
            this.storyList = data.data
            if (this.keyword === '') {
                await this.getStory()
            }

        }
    }
})