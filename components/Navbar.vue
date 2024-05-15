<script setup lang="ts">

import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../public/logo.svg" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav gap-3">
          <li class="nav-item">
            <BaseButton btn-title="Register" btn-class="btn-second" />
          </li>
          <li class="nav-item">
            <BaseButton btn-title="Login" btn-class="btn-main" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>