<template>
  <a href="#"
    ><img v-if="showIcon" :src="item.url" class="item-icono-select" alt="" />{{
      item.text
    }}</a
  >
</template>
<script setup>
import { ref } from 'vue';
defineProps({
  item: {
    type: Object,
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
});
</script>
