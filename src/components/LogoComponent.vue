<template>
  <img class="h-5 w-auto" :src="imgUrl" alt="DIVEMOTOR" />
</template>
<script setup>
defineProps({
  imgUrl: {
    type: String,
    default: '0',
  },
});
</script>
