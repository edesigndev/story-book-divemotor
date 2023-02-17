<template>
  <div class="form-input-dm">
    <div
      v-if="value != ''"
      class="nombre-campo-sub"
      style="opacity: 1"
      :style="inputDark ? '' : 'color:#6c747a;'"
    >
      {{ placeholder }}
    </div>
    <input
      v-model="value"
      :class="showError ? 'input-campo-dm validateErrorForm' : 'input-campo-dm'"
      :style="
        inputDark
          ? ''
          : 'color:#6c747a; border: 1px solid #6c747a; background: transparent;'
      "
      type="text"
      name="names"
      :placeholder="placeholder"
      id="names"
      maxlength="70"
    />
    <div v-if="showIcon" class="icono-form-dm">
      <img
        :src="iconUrl"
        alt=""
        :style="inputDark ? '' : 'filter: invert(1);'"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
defineProps({
  placeholder: {
    type: String,
    default: 'NOMBRE Y APELLIDO *',
  },
  iconUrl: {
    type: String,
    default:
      'https://qa.divemotor.com.pe/o/divemotor-theme/images/img/ico-cellphone.svg',
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  showError: {
    type: Boolean,
    default: false,
  },
  inputDark: {
    type: Boolean,
    default: true,
  },
});

const value = ref('');
</script>
