<template>
  <div class="content-postventa-tabs container-tabs content-centro-tabs">
    <div class="content-tabs-link no-responsive pt-30">
      <li
        :class="
          tabs === 'tab-1'
            ? 'tab-link tab-link-lateral tab-active'
            : 'tab-link tab-link-lateral'
        "
        @click="selectTab('tab-1')"
      >
        VENTAS
      </li>
      <li
        :class="
          tabs === 'tab-2'
            ? 'tab-link tab-link-lateral tab-active'
            : 'tab-link tab-link-lateral'
        "
        @click="selectTab('tab-2')"
      >
        POSTVENTA
      </li>
      <li
        :class="
          tabs === 'tab-3'
            ? 'tab-link tab-link-lateral tab-active'
            : 'tab-link tab-link-lateral'
        "
        @click="selectTab('tab-3')"
      >
        PROTOCOLOS DE <br />BIOSEGURIDAD
      </li>
    </div>
    <div class="content-tabs-info tabs-postventa-content">
      <div
        class="tab-body tab-body--collapse tab-active"
        v-if="tabs === 'tab-1'"
      >
        <div
          class="card-accordion card-accordion--postventa acordion_active no-desktop"
        >
          VENTAS
        </div>
        <div
          class="collapse-accordion collapse-accordion--postventa"
          style="display: block !important"
        >
          <div class="content-postventa-accordion">
            <div
              class="titulo-item-detalle font-extrabold letspac-1 fz-30 color-light-blue"
            >
              VENTAS
            </div>
            <div class="mt-20">
              <div class="dm-accordiom-item">
                <div class="dm-accordiom-head fz-18 font-medium letspac-1">
                  PREGUNTA FRECUENTE 1
                </div>
                <div
                  class="dm-accordiom-body font-paragraph"
                  style="display: none"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  mattis urna quis venenatis porta. Curabitur massa leo,
                  placerat eget diam nec, sollicitudin pharetra turpis. Maecenas
                  ultricies congue orci non eleifend. Mauris ac elit non erat
                  pulvinar pretium finibus nec erat.
                </div>
              </div>
              <div class="dm-accordiom-item">
                <div class="dm-accordiom-head fz-18 font-medium letspac-1">
                  PREGUNTA FRECUENTE 2
                </div>
                <div
                  class="dm-accordiom-body font-paragraph"
                  style="display: none"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  mattis urna quis venenatis porta. Curabitur massa leo,
                  placerat eget diam nec, sollicitudin pharetra turpis. Maecenas
                  ultricies congue orci non eleifend. Mauris ac elit non erat
                  pulvinar pretium finibus nec erat.
                </div>
              </div>
              <div class="dm-accordiom-item">
                <div class="dm-accordiom-head fz-18 font-medium letspac-1">
                  PREGUNTA FRECUENTE 3
                </div>
                <div
                  class="dm-accordiom-body font-paragraph"
                  style="display: none"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  mattis urna quis venenatis porta. Curabitur massa leo,
                  placerat eget diam nec, sollicitudin pharetra turpis. Maecenas
                  ultricies congue orci non eleifend. Mauris ac elit non erat
                  pulvinar pretium finibus nec erat.
                </div>
              </div>
              <div class="dm-accordiom-item">
                <div class="dm-accordiom-head fz-18 font-medium letspac-1">
                  PREGUNTA FRECUENTE 4
                </div>
                <div
                  class="dm-accordiom-body font-paragraph"
                  style="display: none"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  mattis urna quis venenatis porta. Curabitur massa leo,
                  placerat eget diam nec, sollicitudin pharetra turpis. Maecenas
                  ultricies congue orci non eleifend. Mauris ac elit non erat
                  pulvinar pretium finibus nec erat.
                </div>
              </div>
            </div>
            <a href="#" class="btn-link-web mt-40"
              >VER MÁS PREGUNTAS &nbsp;
              <img
                src="https://qa.divemotor.com.pe/o/divemotor-theme/images/img/ico-bottom-pv.svg"
                width="60"
                height="60"
                alt=""
            /></a>
          </div>
        </div>
      </div>
      <div class="tab-body tab-body--collapse" v-if="tabs === 'tab-2'">
        <div class="card-accordion card-accordion--postventa no-desktop">
          POSTVENTA
        </div>
        <div class="collapse-accordion collapse-accordion--postventa">
          <div class="content-postventa-accordion">
            <div
              class="titulo-item-detalle font-extrabold letspac-1 fz-30 color-light-blue"
            >
              POSTVENTA
            </div>
            <div class="mt-20">
              <div class="dm-accordiom-item">
                <div class="dm-accordiom-head fz-18 font-medium letspac-1">
                  PREGUNTA FRECUENTE 1
                </div>
                <div
                  class="dm-accordiom-body font-paragraph"
                  style="display: none"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  mattis urna quis venenatis porta. Curabitur massa leo,
                  placerat eget diam nec, sollicitudin pharetra turpis. Maecenas
                  ultricies congue orci non eleifend. Mauris ac elit non erat
                  pulvinar pretium finibus nec erat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-body tab-body--collapse" v-if="tabs === 'tab-3'">
        <div class="card-accordion card-accordion--postventa no-desktop">
          PROTOCOLOS DE BIOSEGURIDAD
        </div>
        <div class="collapse-accordion collapse-accordion--postventa">
          <div class="content-postventa-accordion">
            <div
              class="titulo-item-detalle font-extrabold letspac-1 fz-30 color-light-blue"
            >
              PROTOCOLOS DE BIOSEGURIDAD
            </div>
            <div class="mt-20">
              <div class="dm-accordiom-item">
                <div class="dm-accordiom-head fz-18 font-medium letspac-1">
                  PREGUNTA FRECUENTE 1
                </div>
                <div
                  class="dm-accordiom-body font-paragraph"
                  style="display: none"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  mattis urna quis venenatis porta. Curabitur massa leo,
                  placerat eget diam nec, sollicitudin pharetra turpis. Maecenas
                  ultricies congue orci non eleifend. Mauris ac elit non erat
                  pulvinar pretium finibus nec erat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const tabs = ref('tab-1');

const selectTab = (tab) => {
  tabs.value = tab;
};
</script>
