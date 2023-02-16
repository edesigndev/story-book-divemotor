<template>
  <component :is="layout"> <router-view /> </component>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const defaultLayout = "blank";
const { currentRoute } = useRouter();

const layout = computed(() => {
  return `layout-${currentRoute.value.meta.layout || defaultLayout}`;
});

</script>
