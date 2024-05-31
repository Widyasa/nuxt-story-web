import {defineStore} from "pinia";
import axios from "axios";
import {apiUrl} from "~/helpers/globalVariable";
import {decodeToken} from "~/helpers/DecodeToken";
import {useAsyncData} from "#app";

export const storyStore = defineStore('storyStore', {
    state : () => ({
        storyList : [],
        storyByAuthor : [],
        pages: ref(1),
        keyword: ref(''),
        story: {},
        author_id: ref(''),
        status_code : ref()
    }),
    actions : {
        async getStory() {
            const {data} = await useFetch(`${apiUrl}stories?keyword&author&page=1`)
            if (this.pages > 1) {
                data.value?.data.forEach(item => this.storyList.push(item))
            } else {
                    this.storyList = data.value?.data
            }
        },
        async searchStory() {
            const {data} = await useFetch(apiUrl + `stories?&keyword=${this.keyword}`)
            this.storyList = data.value?.data
            if (this.keyword === '') {
                await this.getStory()
            }

        },
        async getStoryById(id:String) {
            const {data} = await useFetch(apiUrl + `stories/${id}`)
            this.story = data.value?.data
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
        async getStoryByAuthor() {
            try {
                const user_id = decodeToken()
                if (user_id) {
                    const {data} = await useFetch(apiUrl + `stories?&author=${user_id.id}`)
                    this.storyByAuthor = data.value.data
                }
            } catch (e) {
                console.error(e)
            }
        },
        async createStory (storyData:any) {
            try {
                const response = await $fetch(apiUrl + 'stories', {
                    method:'POST',
                    headers: {'Content-Type': 'multipart/form-data'},
                    body : storyData
                })
                this.status_code = response.status
               return this.getStory()


            } catch (e) {
                console.error(e)
            }
        },
        async uploadImageStory (storyImage:any) {
            try {
                const response = await $fetch(apiUrl + 'upload', {
                    method:'POST',
                    headers: {'Content-Type': 'multipart/form-data'},
                    body: storyImage
                })
            } catch (e) {
                console.error(e)
            }
        },
        async deleteStory (id:any) {
            try {
                const response = await $fetch(apiUrl + `stories/${id}`,{
                    method:'DELETE'
                })
                await this.getStoryByAuthor()
            } catch (e) {
                console.error(e)
            }
        }

    }
})