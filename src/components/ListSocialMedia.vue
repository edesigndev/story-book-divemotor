<template>
  <div class="flex-redes">
    <template v-for="(item, index) in redes" :key="index">
      <item-social-media :item="item" />
    </template>
  </div>
</template>
<script setup>
import { REDES } from '../constants/enums';

const redes = Object.values(REDES);
</script>
<style lang="scss">
.flex-redes {
  display: flex;
  grid-gap: 30px;
  align-items: center;
  justify-content: center;
}
</style>
