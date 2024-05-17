<script setup lang="ts">

import Navbar from "~/components/Navbar.vue";
import Hero_section from "~/components/sections/hero_section.vue";
import Story_section from "~/components/sections/story_section.vue";
</script>

<template>
  <header class="">
    <Navbar />
    <Hero_section />
  </header>
  <Story_section />
  <Footer />
</template>

<style scoped>
header {
  height: 100dvh;
}
</style>