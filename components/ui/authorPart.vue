<script setup lang="ts">
import {storyStore} from "~/stores/story";

const stories = storyStore()
const route = useRoute()
const routeId:String = route.params.id
stories.getStoryById(routeId)
</script>

<template>
  <div class="card">
    <div class="card-body">
<!--      <img :src="" alt="" class="">-->
      <p v-if="stories.story.author">{{stories.story.author.name}}</p>
<!--      <p v-if="stories.story.author.name" class="">{{}}</p>-->
    </div>
  </div>
</template>

<style scoped>

</style>