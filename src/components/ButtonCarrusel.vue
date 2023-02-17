<template>
  <div class="button-carousel-sm">
    <button class="tablinks" tabindex="0">
      <img :src="imgUrl" alt="" />
    </button>
  </div>
</template>
<script setup>
defineProps({
  imgUrl: {
    type: String,
    default: '0',
  },
});
</script>
