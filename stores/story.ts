import {defineStore} from "pinia";
import axios from "axios";
import {apiUrl} from "~/helpers/globalVariable";

export const storyStore = defineStore('storyStore', {
    state : () => ({
        storyList : []
    }),
    actions : {
        async getStory() {
            const {data} = await axios.get(apiUrl + 'stories')
            this.storyList = data.data
        }
    }
})