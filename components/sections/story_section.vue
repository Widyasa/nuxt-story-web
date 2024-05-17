<script setup lang="ts">

import SearchStory from "~/components/ui/SearchStory.vue";
import SelectOptionStory from "~/components/ui/SelectOptionStory.vue";
import CardStory from "~/components/ui/CardStory.vue";
import {imageUrl} from "~/helpers/globalVariable";
import BaseButton from "~/components/ui/BaseButton.vue";
const stories = storyStore()
stories.getStory()
function formattedDate(timestamp: string): string {
  const dateObject = new Date(timestamp);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');
  const date = `${year}-${month}-${day}`;
  return date;
}
const pagination = () => {
  stories.$state.pages++
  stories.getStory()
  console.log(stories.$state.pages)
}
</script>

<template>
  <section class="container mt-5">
    <div class="d-flex justify-content-between">
      <div class="">
        <SearchStory />
      </div>
      <div class="">
        <SelectOptionStory />
      </div>
    </div>
    <div class="mt-5">
      <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 gy-4">
        <CardStory
            v-for="(item, index) in stories.storyList"
            :key="index"
            :category-story="item.category.name"
            :date-story="formattedDate(item.createdAt)"
            :author-story="item.author.name"
            :content-story="item.content"
            :title-story="item.title"
            :image-description="imageUrl + item.cover_image.name"
            :content-image="imageUrl + item.cover_image.url"
        />
      </div>
      <div class="mt-5 d-flex justify-content-center">
        <BaseButton btn-title="Load More" btn-class="btn-main" @click="pagination"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>