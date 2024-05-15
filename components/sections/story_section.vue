<script setup lang="ts">

import SearchStory from "~/components/ui/SearchStory.vue";
import SelectOptionStory from "~/components/ui/SelectOptionStory.vue";
import CardStory from "~/components/ui/CardStory.vue";
const stories = storyStore()
stories.getStory()
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
      <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 ">
        <CardStory />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>