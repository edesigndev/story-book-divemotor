<template>
  <div class="block h-full border-secondary-grey pg-item-footer pr-6">
    <div
      class="card-accordion card-accordion--footer border-b-1-mb pointer"
      :class="show ? 'acordion_active' : ''"
      @click="showContent"
    >
      <p class="font-primary text-xl font-extrabold uppercase">POSTVENTA</p>
    </div>
    <div
      class="collapse-accordion"
      :style="show ? 'display: block' : 'display: none'"
    >
      <ul class="links-footer">
        <li id="layout_footer_409">
          <a href="https://qa.divemotor.com.pe/camiones3" target="_blank"
            >CAMIONES</a
          >
        </li>
        <li id="layout_footer_410">
          <a href="https://qa.divemotor.com.pe/buses3" target="_blank">BUSES</a>
        </li>
        <li id="layout_footer_411">
          <a href="https://qa.divemotor.com.pe/vans3" target="_blank">VANS</a>
        </li>
        <li id="layout_footer_412">
          <a href="https://qa.divemotor.com.pe/automoviles3" target="_blank"
            >AUTOMÓVILES</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const show = ref(false);
const showContent = () => {
  show.value = !show.value;
};
</script>
