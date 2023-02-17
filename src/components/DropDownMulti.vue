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
        <div class="select-column-3">
          <ul class="item-listaselect">
            <li v-for="(item, index) in MOTIVOS_UNO" :key="index">
              <drop-down-item
                :item="item"
                :id="`${index}-${item.name}`"
              ></drop-down-item>
            </li>
          </ul>
          <div class="linea-divisora-vertical-white"></div>
          <ul class="item-listaselect">
            <li v-for="(item, index) in MOTIVOS_DOS" :key="index">
              <drop-down-item
                :item="item"
                :id="`${index}-${item.name}`"
              ></drop-down-item>
            </li>
          </ul>
        </div>
      </div>
      <span class="icono-select"></span>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { MOTIVOS_UNO, MOTIVOS_DOS } from '../constants/enums';
const show = ref(false);
const showContent = () => {
  show.value = !show.value;
};
defineProps({
  text: {
    type: String,
    default: 'SELECCIONA EL MOTIVO QUE DESEES',
  },
});
</script>
