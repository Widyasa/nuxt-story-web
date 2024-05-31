<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
import {formattedDate} from "../../../helpers/DateFormat";

definePageMeta({
  middleware:'auth',
  layout:'userlayouts'
})
const id = ref()
const thead = ['No', 'Title', 'Last Update', 'Action']
const stories = storyStore()
stories.getStoryByAuthor()
const getId = (idTable:string) => {
  id.value = idTable
}
</script>

<template>
  <div class="page-wrapper">
    <div class="d-flex justify-content-between">
      <h4 class="fs-3 fw-semibold">Story list</h4>
      <NuxtLink to="/user/story/create">
        <BaseButton btn-title="" btn-class="btn-main">
          <i class="fa-regular fa-plus"></i>
          Create Story
        </BaseButton>
      </NuxtLink>
    </div>
    <div class="mt-5">
      <table-component :thead_data="thead">
          <tr v-for="(item, index) in stories.storyByAuthor">
            <td>{{index + 1}}</td>
            <td>{{item.title}}</td>
            <td>{{formattedDate(item.updatedAt)}}</td>
            <td>
              <div class="flex gap-3">
                  <NuxtLink to="/">
                    <BaseButton btn-title="Edit" btn-class="btn-second" />
                  </NuxtLink>
                    <BaseButton @click="getId(item.id)" data-bs-toggle="modal" data-bs-target="#deleteStoryModal" btn-title="Delete" btn-class="btn-second-danger ms-3" />
              </div>
            </td>
          </tr>
      </table-component>
      <DeleteStoryModal :id="id" />
    </div>
  </div>
</template>

<style scoped>
.w-fit{
  width: fit-content;
}
</style>