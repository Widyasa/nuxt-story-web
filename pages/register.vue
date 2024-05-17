<script setup lang="ts">



import BaseInput from "~/components/ui/BaseInput.vue";
import BaseButton from "~/components/ui/BaseButton.vue";

definePageMeta({
  layout:'authlayout'
})
</script>

<template>
  <div class="mt-4 d-flex flex-column gap-3">
    <BaseInput input-name="name" input-placeholder="Enter name" input-title="Name" input-type="text" />
    <BaseInput input-name="username" input-placeholder="Enter username" input-title="Username" input-type="text" />
    <BaseInput input-name="email" input-placeholder="Enter email" input-title="Email" input-type="email" />
    <BaseInput input-name="password" input-placeholder="Enter password" input-title="Password" input-type="passowrd" />
    <BaseInput input-name="password confirm" input-placeholder="Enter password confirm" input-title="Password Confirm" input-type="passowrd" />
    <BaseButton btn-title="Register" btn-class="btn-main w-100" />
  </div>
  <p class="mt-4 text-center">
    don't have an account? <NuxtLink class="text-decoration-none text-black fw-medium" to="register">Register</NuxtLink>
  </p>
</template>

<style scoped>

</style>