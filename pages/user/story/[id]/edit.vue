<script setup lang="ts">

import BaseInput from "~/components/ui/BaseInput.vue";
import {categoryStore} from "~/stores/category";
import {QuillEditor} from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import BaseButton from "~/components/ui/BaseButton.vue";
definePageMeta({
  middleware: 'auth',
  layout:'userlayouts'
})
const imagePrev=ref('https://img.freepik.com/free-vector/landing-page-image-upload-concept_23-2148304432.jpg?t=st=1714706545~exp=1714710145~hmac=29ca06a88ac91f442eb5928ee467c9ce7a8ec12e605b23f3927d2a52864e9093&w=1380')
const story = storyStore()
const storyContent = ref()
const file = ref()
const fileInput = ref()
const previewPhoto = (e:any) => {
  fileInput.value = e.target.files[0]
  file.value = e.target.files[0];
  if (!file.value) return; // Handle no file selected case
  const reader = new FileReader();
  reader.onload = () => {
    if (typeof reader.result === "string") {
      imagePrev.value = reader.result
    }
    e.target.value = ""
  };
  reader.readAsDataURL(file.value);
}
const storyState = reactive({
  title: '',
  category: '',
  content: storyContent
})
const imageStoryContent = reactive({
  files : fileInput.value,
  refId : story.storyList[0]?.id,
  ref : 'api::story.story',
  field : 'cover_image'
})
const category = categoryStore()
category.getCategory()
const createData = async () =>  {
  try {
    await story.createStory(storyState)
    if (story.status_code == 200) {
      const fd = new FormData();
      fd.append('files', file.value);
      fd.append('refId', story.storyList[0]?.id);
      fd.append('ref', 'api::story.story');
      fd.append('field', 'cover_image');
      try {
        await story.uploadImageStory(fd)
        navigateTo('/user/story')
      } catch (e) {
        console.log(e)
      }
    }
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <div>
    <p>{{imageStoryContent.files}}</p>
    <p>{{fileInput}}</p>
    <form @submit.prevent="createData" class="d-flex flex-column gap-3">
      <BaseInput v-model="storyState.title" input-type="text" input-title="Story Title" input-name="story-title" input-placeholder="input story title" />
      <div class="">
        <p>Category</p>
        <select v-model="storyState.category" name="category-name" class="form-select mt-2">
          <option value="0" selected>Choose Category</option>
          <option v-for="(item, index) in category.categoryList" :value="item.id">{{item.name}}</option>
        </select>
      </div>
      <div class="">
        <p class="pb-1">Content</p>
        <QuillEditor toolbar="full" contentType="html" v-model:content="storyContent" theme="snow" />
      </div>
      <div class="">
        <p class="p-2">Cover Image</p>
        <div class="img-upload-wrapper">
          <div class="position-absolute">
            <img :src="imagePrev" id="file-preview" class="img-prev" alt="">
          </div>
          <input type="file" class="w-100 position-relative h-100 opacity-0" id="file-input" @change="previewPhoto">
        </div>
      </div>
      <BaseButton btn-title="submit" btn-class="btn-main" type="submit" />
    </form>

  </div>
</template>

<style scoped>
.img-upload-wrapper, .img-prev{
  width: 200px;
  height: 200px;
  aspect-ratio: 1/1;
  object-fit: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
</style>