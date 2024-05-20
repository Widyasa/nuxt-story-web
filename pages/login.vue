<script setup lang="ts">
import BaseInput from "~/components/ui/BaseInput.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
definePageMeta({
  layout:'authlayout',
  middleware:'is-login'
})
const loginInput = reactive({
  identifier: '',
  password: ''
})
const login = authStore()
console.log(login.$state.isLogin)

const signIn = async () => {
  const fd = new FormData();
  try {
    const res = await login.login(loginInput)
    console.log(res)
    console.log(login.$state.isLogin)
    return navigateTo('/')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <form @submit.prevent="signIn" class="mt-4 d-flex flex-column gap-3">
    <BaseInput v-model="loginInput.identifier" input-name="email/username" input-placeholder="Enter email/username" input-title="Email/Username" input-type="text" />
    <BaseInput v-model="loginInput.password" input-name="password" input-placeholder="Enter password" input-title="Password" input-type="passowrd" />
    <BaseButton type="submit" btn-title="Login" btn-class="btn-main w-100" />
  </form>
  <p class="mt-4 text-center">
    don't have an account? <NuxtLink class="text-decoration-none text-black fw-medium" to="register">Register</NuxtLink>
  </p>
</template>

<style scoped>

</style>