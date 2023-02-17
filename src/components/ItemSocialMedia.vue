<template>
  <a :href="item.href" target="_blank" class="icono-footer-facebook"
    ><img :src="item.url" :alt="item.name"
  /></a>
</template>
<script setup>
defineProps({
  item: {
    type: Object,
  },
});
</script>
