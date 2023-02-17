<template>
  <div class="block">
    <div
      v-if="isDegradientCircle"
      class="block-content"
      :style="`background-image: radial-gradient(circle at -13% -12%, ${color}, ${color} 5%, ${color} 17%, ${color} 24%, ${ColorTwo} 67%, ${ColorThree} 103%, ${color} 112%);`"
    ></div>
    <div
      v-else-if="isDegradientLineal"
      class="block-content"
      :style="`background-image: linear-gradient(134deg, ${ColorTwo} -7%, ${color} 114%);`"
    ></div>
    <div
      v-else
      class="block-content"
      :style="`background-color: ${color}`"
    ></div>
    <div class="block-description">
      <span>{{ colorName }}</span
      ><br />
      <span
        ><strong>{{ color }}</strong></span
      >
    </div>
  </div>
</template>
<script setup>
defineProps({
  color: {
    type: String,
    default: '#0066CC',
  },
  colorName: {
    type: String,
    default: 'Blanco',
  },
  isDegradientLineal: {
    type: Boolean,
    default: false,
  },
  isDegradientCircle: {
    type: Boolean,
    default: false,
  },
  ColorTwo: {
    type: String,
    default: '#0066CC',
  },
  ColorThree: {
    type: String,
    default: '#0066CC',
  },
});
</script>
<style lang="scss">
.block {
  display: flex;
  flex-direction: column;
  &-content {
    width: 140px;
    height: 140px;
    margin: 2rem;
  }
}
</style>
