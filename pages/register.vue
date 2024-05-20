<script setup lang="ts">



import BaseInput from "~/components/ui/BaseInput.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
import auth from "~/middleware/auth";

definePageMeta({
  layout:'authlayout',
  middleware:'is-login'
})
const registerInput = reactive({
  name: '',
  username: '',
  email: '',
  password: ''
})
const register = authStore()
const signUp = async () => {
  try {
    const res = await register.register(registerInput)
    return navigateTo('/')
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <form @submit.prevent="signUp" class="mt-4 d-flex flex-column gap-3">
    <BaseInput v-model="registerInput.name" input-name="name" input-placeholder="Enter name" input-title="Name" input-type="text" />
    <BaseInput  v-model="registerInput.username" input-name="username" input-placeholder="Enter username" input-title="Username" input-type="text" />
    <BaseInput v-model="registerInput.email" input-name="email" input-placeholder="Enter email" input-title="Email" input-type="email" />
    <BaseInput v-model="registerInput.password" input-name="password" input-placeholder="Enter password" input-title="Password" input-type="passowrd" />
<!--    <BaseInput input-name="password confirm" input-placeholder="Enter password confirm" input-title="Password Confirm" input-type="passowrd" />-->
    <BaseButton type="submit" btn-title="Register" btn-class="btn-main w-100" />
  </form>
  <p class="mt-4 text-center">
    don't have an account? <NuxtLink class="text-decoration-none text-black fw-medium" to="register">Register</NuxtLink>
  </p>
</template>

<style scoped>

</style>