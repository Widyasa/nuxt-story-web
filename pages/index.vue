<script setup lang="ts">

import Navbar from "~/components/Navbar.vue";
import Hero_section from "~/components/sections/hero_section.vue";
</script>

<template>
  <header class="">
    <Navbar />
    <Hero_section />
  </header>
</template>

<style scoped>
header {
  height: 90vh;
}
</style>