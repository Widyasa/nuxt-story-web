<script setup lang="ts">

import Hero_section from "~/components/sections/hero_section.vue";
import Story_section from "~/components/sections/story_section.vue";
definePageMeta({
  layout: 'homelayouts'
})
</script>

<template>
  <header class="">
    <Hero_section />
  </header>
  <Story_section />
</template>

<style scoped>
header {
  height: 91dvh;
}
</style>