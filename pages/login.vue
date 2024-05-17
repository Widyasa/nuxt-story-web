<script setup lang="ts">



import BaseInput from "~/components/ui/BaseInput.vue";
import BaseButton from "~/components/ui/BaseButton.vue";

definePageMeta({
  layout:'authlayout'
})
</script>

<template>
  <div class="mt-4 d-flex flex-column gap-3">
    <BaseInput input-name="email/username" input-placeholder="Enter email/username" input-title="Email/Username" input-type="text" />
    <BaseInput input-name="password" input-placeholder="Enter password" input-title="Password" input-type="passowrd" />
    <BaseButton btn-title="Login" btn-class="btn-main w-100" />
  </div>
  <p class="mt-4 text-center">
    don't have an account? <NuxtLink class="text-decoration-none text-black fw-medium" to="register">Register</NuxtLink>
  </p>
</template>

<style scoped>

</style>