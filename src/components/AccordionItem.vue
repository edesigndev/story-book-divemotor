<template>
  <div class="dm-accordiom-item">
    <div
      :class="
        showContent
          ? 'dm-accordiom-head fz-18 font-medium letspac-1'
          : 'dm-accordiom-head fz-18 font-medium letspac-1 acordion_active'
      "
      @click="showContent = !showContent"
    >
      <h3 class="fz-18">
        ¿EL NUEVO ACCELO ESTÁ DISEÑADO PARA LARGA DISTANCIA?
      </h3>
    </div>
    <div
      class="dm-accordiom-body font-paragraph"
      :style="showContent ? 'display: none;' : 'display: block;'"
    >
      Capacidad hasta 18 asientos, Rodado Simple, Airbag piloto y copiloto, Aire
      acondicionado y calefaccion en cabina y salón, alzalunas electrico, puerta
      corrediza lateral, techo alto, encendido de boton, luces en cabina y
      salón, volante ajustable y multifuncion, preparada con todos los sistemas
      de seguridad activos y para caminos dificiles del territorio nacional.
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const showContent = ref(false);
</script>
<style lang="scss">
.dm-accordiom-item {
  width: 100%;
}

.dm-accordiom-head.acordion_active {
  color: #0066cc;
  font-weight: bold;
}
.dm-accordiom-head {
  padding: 30px 0;
  padding-right: 30px;
  border-top: 1px solid #000;
  position: relative;
  cursor: pointer;
  font-family: Work Sans;
  text-align: left;
}
.letspac-1 {
  letter-spacing: 1px;
}
.fz-18 {
  font-size: 18px;
}
.font-medium {
  font-weight: 500;
}
.dm-accordiom-body {
  padding-bottom: 30px;
  display: none;
}
.font-paragraph {
  font-family: PT Sans;
}

.dm-accordiom-head.acordion_active:before {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}

.dm-accordiom-head.acordion_active {
  color: #0066cc;
  font-weight: bold;
}
// .dm-accordiom-head:before {
//   content: '';
//   position: absolute;
//   width: 20px;
//   height: 14px;
//   right: 0;
//   background: url(../img/ico-arrow-bottom.svg) no-repeat;
//   top: 45%;
// }
</style>
