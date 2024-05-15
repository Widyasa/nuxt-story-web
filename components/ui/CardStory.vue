<script setup lang="ts">
const props = defineProps({
  contentImage : {required: true, type:String},
  imageDescription : {required: true, type:String},
  titleCard : {required: true, type:String},
  contentCard : {required: true, type:String},
  authorCard : {required: true, type:String},
  dateCard : {required: true, type:String},
})
</script>

<template>
  <div class="col">
    <div class="card-story">
      <img :src="props.contentImage" alt="">
    </div>
  </div>
</template>

<style scoped>

</style>