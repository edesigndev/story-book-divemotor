<template>
  <div class="result-card-cs context-2640490" style="min-height: 669px">
    <div class="flex justify-end img-concesionario">
      <img
        src="https://www.divemotor.com/img/sede_dnueve.jpg"
        alt="undefined - DIVEMOTOR"
      />
    </div>
    <div class="mt-3" style="padding: 0 20px">
      <div class="space-height-title">
        <h3 class="font-extrabold font-primary text-black text-xl">
          AV. CANADA - VENTA Y TALLER
        </h3>
      </div>
    </div>
    <div class="tab">
      <div class="tooltip" style="opacity: inherit">
        <button class="tablinks defaultOpen active" @click="changeMarker">
          <img
            src="https://qa.divemotor.com.pe/documents/2405002/2616844/logo-mercedes-benz.webp"
            alt="mercedes-benz - DIVEMOTOR"
          />
        </button>
        <span
          class="tooltiptext toltip1"
          :style="showMarker ? 'display: block;' : 'display: none;'"
          >mercedes benz</span
        >
      </div>
      <div style="clear: both"></div>
    </div>
    <div id="2640490-mercedes-benz" class="tabcontent" style="display: block">
      <div class="card-cs-opciones">
        <div class="card-opcion" @click="showTooltip">
          <img
            src="https://qa.divemotor.com.pe/o/divemotor-theme/images/img/white/ico-diveusados.svg"
            style="filter: invert(1)"
            alt="mercedes-benz - DIVEMOTOR"
          />
          <span class="titulo-card-cs-opciones">VENTA VEHICULOS</span>
          <img
            src="https://qa.divemotor.com.pe/o/divemotor-theme/images/img/ico-informacion.svg"
            alt="mercedes-benz - DIVEMOTOR"
          />
          <div
            class="tooltip-card"
            :style="show ? 'display: block;' : 'display: none;'"
          >
            <div class="close-tooltip" @click="showTooltip">
              <img
                src="https://qa.divemotor.com.pe/o/divemotor-theme/images/img/ico-equis.png"
                alt=""
                style="margin: 0; width: auto"
              />
            </div>
            <b> venta vehiculos para: </b>Automóviles.
          </div>
        </div>
      </div>
    </div>
    <div class="card-cs-detalle">
      <div class="card-cs-detalle-direccion">
        <div>Av. Canada¡ N° 1160, La Victoria <b>Miraflores</b></div>
        <div>(01) 712-2000</div>
      </div>
      <div class="card-cs-detalle-horario">
        <div><b>Horario de atención</b></div>
        <div>Lun-Vie: 08:30 - 17:45 | Sab: 08:30 - 13:00</div>
      </div>
    </div>
    <div class="result-actions-cs">
      <div class="flex items-center">
        <button
          class="primary-button primary-button--concesionario"
          data-long="-77.012771"
          data-lat="-12.084093"
          type="button"
        >
          MAPA
        </button>
      </div>
      <div class="flex items-center justify-end app-concesionarios">
        <a
          target="_blank"
          href="https://www.google.com/maps/place/12%C2%B005'02.7%22S+77%C2%B000'46.0%22W/@-12.084093,-77.0149597,712m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-12.084093!4d-77.012771"
          class=""
          tabindex="0"
          ><img
            src="https://qa.divemotor.com.pe/o/divemotor-theme/images/img/maps-responsive-card.png"
            alt=""
        /></a>
        <a
          target="_blank"
          href="https://waze.com/ul/h6mc5r81j2"
          class=""
          tabindex="0"
          ><img
            src="https://qa.divemotor.com.pe/o/divemotor-theme/images/img/waze-responsive-card.png"
            alt=""
        /></a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const show = ref(false);
const showMarker = ref(false);

const showTooltip = () => {
  show.value = !show.value;
};
const changeMarker = () => {
  showMarker.value = !showMarker.value;
};
</script>
