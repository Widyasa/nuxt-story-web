import {defineStore} from "pinia";
import axios from "axios";
import {apiUrl} from "~/helpers/globalVariable";

export const storyStore = defineStore('storyStore', {
    state : () => ({
        storyList : [],
        pages: ref(1),
        keyword: ref(''),
        story: {}
    }),
    actions : {
        async getStory() {
            const {data} = await axios.get(apiUrl + `stories?&page=${this.pages}`)
            if (this.pages > 1) {
                data.data.forEach(item => this.storyList.push(item))
            } else {
                    this.storyList = data.data
            }
        },
        async searchStory() {
            const {data} = await axios.get(apiUrl + `stories?keyword=${this.keyword}`)
            this.storyList = data.data
            if (this.keyword === '') {
                await this.getStory()
            }

        },
        async getStoryById(id:String) {
            const {data} = await axios.get(apiUrl + `stories/${id}`)
            this.story = data.data
        },
        async sortNewestData () {
              this.storyList.sort(function (a,b) {return b.createdAt.localeCompare(a.createdAt)})
        },
        async sortAsc () {
              this.storyList.sort(function (a,b) {return a.title.localeCompare(b.title)})
        },
        async sortDesc () {
              this.storyList.sort(function (a,b) {return b.title.localeCompare(a.title)})
        },

    }
})