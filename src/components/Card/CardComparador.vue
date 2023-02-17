<template>
  <div class="lista-column" style="padding-bottom: 0" id="lista-column-1">
    <div class="item-dimensiones">
      <div class="content-img-dimension">
        <img
          src="https://www.divemotor.com/cdn/accelolarge.jpg"
          alt="Imagen de carro"
        />
      </div>
    </div>

    <p class="font-extrabold font-primary text-black fz-30 mt-10">Accelo</p>
    <div class="result-features result-features--comparar">
      <div class="border-r-1 border-white">
        <p class="text-2xl font-bold tracking-wider">4.8</p>
        <p class="text-xs tracking-wide">LT/MOTOR</p>
      </div>
      <div class="border-r-1 border-white">
        <p class="text-2xl font-bold tracking-wider">156</p>
        <p class="text-xs tracking-wide">CV/POTENCIA</p>
      </div>
      <div class="">
        <p class="text-2xl font-bold tracking-wider">5.7</p>
        <p class="text-xs tracking-wide">Carga/A - T</p>
      </div>
    </div>

    <div class="color-vehiculo-comparar border-b-1 border-secondary-grey">
      <div
        class="color-vehiculo color-vehiculo-Blanco color-vehiculo--active"
        style="background: rgb(255 255 255)"
        @click="white = !white"
      >
        <div
          class="color-aro-vehiculo"
          :style="white ? 'display:block;' : 'display:none;'"
        >
          <svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106.3 106.3"
          >
            <path
              class="b"
              d="M53.15,0C23.8,0,0,23.8,0,53.15s23.8,53.15,53.15,53.15,53.15-23.8,53.15-53.15S82.5,0,53.15,0Zm0,90.72c-20.75,0-37.57-16.82-37.57-37.57S32.4,15.58,53.15,15.58s37.57,16.82,37.57,37.57-16.82,37.57-37.57,37.57Z"
            ></path>
          </svg>
        </div>
        <div
          class="color-nombre"
          :style="white ? 'display:block;' : 'display:none;'"
        >
          Blanco
        </div>
      </div>

      <div
        class="color-vehiculo color-vehiculo-Rojo"
        style="background: rgb(255 0 0)"
        @click="red = !red"
      >
        <div
          class="color-aro-vehiculo"
          :style="red ? 'display:block;' : 'display:none;'"
        >
          <svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106.3 106.3"
          >
            <path
              :style="red ? 'fill:#fff;' : 'fill:#2020;'"
              class="b"
              d="M53.15,0C23.8,0,0,23.8,0,53.15s23.8,53.15,53.15,53.15,53.15-23.8,53.15-53.15S82.5,0,53.15,0Zm0,90.72c-20.75,0-37.57-16.82-37.57-37.57S32.4,15.58,53.15,15.58s37.57,16.82,37.57,37.57-16.82,37.57-37.57,37.57Z"
            ></path>
          </svg>
        </div>
        <div
          class="color-nombre"
          :style="red ? 'display:block;' : 'display:none;'"
        >
          Rojo
        </div>
      </div>

      <div
        class="color-vehiculo color-vehiculo-Azul"
        style="background: rgb(0 0 204)"
        @click="blue = !blue"
      >
        <div
          class="color-aro-vehiculo"
          :style="blue ? 'display:block;' : 'display:none;'"
        >
          <svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106.3 106.3"
          >
            <path
              :style="blue ? 'fill:#fff;' : 'fill:#2020;'"
              class="b"
              d="M53.15,0C23.8,0,0,23.8,0,53.15s23.8,53.15,53.15,53.15,53.15-23.8,53.15-53.15S82.5,0,53.15,0Zm0,90.72c-20.75,0-37.57-16.82-37.57-37.57S32.4,15.58,53.15,15.58s37.57,16.82,37.57,37.57-16.82,37.57-37.57,37.57Z"
            ></path>
          </svg>
        </div>
        <div
          class="color-nombre"
          :style="blue ? 'display:block;' : 'display:none;'"
        >
          Azul
        </div>
      </div>

      <div
        class="color-vehiculo color-vehiculo-Amarillo"
        style="background: rgb(255 255 0)"
        @click="yellow = !yellow"
      >
        <div
          class="color-aro-vehiculo"
          :style="yellow ? 'display:block;' : 'display:none;'"
        >
          <svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106.3 106.3"
          >
            <path
              :style="yellow ? 'fill:#fff;' : 'fill:#2020;'"
              class="b"
              d="M53.15,0C23.8,0,0,23.8,0,53.15s23.8,53.15,53.15,53.15,53.15-23.8,53.15-53.15S82.5,0,53.15,0Zm0,90.72c-20.75,0-37.57-16.82-37.57-37.57S32.4,15.58,53.15,15.58s37.57,16.82,37.57,37.57-16.82,37.57-37.57,37.57Z"
            ></path>
          </svg>
        </div>
        <div
          :style="yellow ? 'display:block;' : 'display:none;'"
          class="color-nombre"
        >
          Amarillo
        </div>
      </div>
    </div>
    <div class="content-btn-cotizar">
      <button
        class="primary-button primary-button--medium primary-button--comparar"
        type="button"
        onclick="window.open('https://forms.divemotor.com/camiones/?utm_source=web-divemotor', '_blank');"
      >
        COTIZAR AQUÍ
      </button>
      <a
        href="/mercedes-benz-accelo"
        class="btn-link-web mt-20 btn-link-web--comparar"
        style="justify-content: center"
        >MÁS INFORMACIÓN &nbsp;
        <img
          src="https://qa.divemotor.com.pe/o/divemotor-theme/images/img/ico-derecha-gris.svg"
          width="60"
          height="60"
      /></a>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const yellow = ref(false);
const blue = ref(false);
const red = ref(false);
const white = ref(false);
</script>
