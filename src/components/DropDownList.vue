<template>
  <div class="content-filtro-motivo">
    <div
      :class="
        show
          ? 'content-select-filtro content-select-filtro--active'
          : 'content-select-filtro'
      "
      @click="showContent"
    >
      <div class="dato-seleccionado">{{ text }}</div>
      <div
        class="listaselect"
        :style="show ? 'display: block' : 'display: none'"
      >
        <ul class="item-listaselect">
          <li v-for="(item, index) in MARCAS" :key="index">
            <drop-down-item
              :item="item"
              :showIcon="showIcon"
              :id="`${index}-${item.name}`"
            ></drop-down-item>
          </li>
        </ul>
      </div>
      <span class="icono-select"></span>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { MARCAS } from '../constants/enums';
const show = ref(false);
const showContent = () => {
  show.value = !show.value;
};
defineProps({
  text: {
    type: String,
    default: 'OPCIONES',
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
});
</script>
