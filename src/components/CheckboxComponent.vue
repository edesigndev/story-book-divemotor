<template>
  <div class="content-checkbox mt-20">
    <label class="checkbox" :style="inputDark ? '' : 'color:#231f1f;'"
      >{{ text }}
      <input v-model="value" type="checkbox" />
      <span
        class="check"
        :style="disabled ? 'background-color: #6c747a' : ''"
      ></span>
    </label>
  </div>
</template>
<script setup>
import { ref } from 'vue';
defineProps({
  text: {
    type: String,
    default: 'Quiero recibir publicidad sobre ofertas, productos y eventos.',
  },
  inputDark: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const value = ref(false);
</script>
