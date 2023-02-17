<template>
  <div>
    <div class="content-tab-link-web no-responsive">
      <div class="options-tabs">
        <div
          :class="
            activeTab === 'tab1'
              ? 'tab-link-vehiculo dm-tab-active'
              : 'tab-link-vehiculo'
          "
          @click="activeTab = 'tab1'"
        >
          CHASIS OF 1721
        </div>
        <div
          :class="
            activeTab === 'tab2'
              ? 'tab-link-vehiculo dm-tab-active'
              : 'tab-link-vehiculo'
          "
          @click="activeTab = 'tab2'"
        >
          CHASIS OF 1721 LARGE
        </div>
      </div>
      <div class="btn-tab-cotiza">
        <a href="https://d19e5ez6occb4z.cloudfront.net/contacta-asesor.html">
          <button class="primary-button primary-button--submenu" type="button">
            COTIZA AQUÍ
          </button>
        </a>
      </div>
    </div>
    <div
      v-if="activeTab === 'tab2'"
      class="font-extrabold letspac-1 fz-30 color-light-blue"
    >
      CHASIS OF 1721 A
    </div>
    <div
      v-if="activeTab === 'tab1'"
      class="font-extrabold letspac-1 fz-30 color-light-blue"
    >
      CHASIS OF 1721 LARGE
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const activeTab = ref('tab1');
</script>
<style lang="scss">
.content-tab-link-web {
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tab-link-vehiculo.dm-tab-active {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: #cce0f5;
  color: #0066cc;
}
.tab-link-vehiculo {
  font-size: 18px;
  line-height: 25px;
  padding: 10px 30px;
  height: 70px;
  display: inline-flex;
  font-weight: 800;
  letter-spacing: 1.5px;
  align-items: center;
  vertical-align: top;
  cursor: pointer;
}

.btn-tab-cotiza {
  float: right;
}

.color-light-blue {
  color: #0066cc;
  text-align: left;
}
.letspac-1 {
  letter-spacing: 1px;
}
.fz-30 {
  font-size: 30px;
}
.font-extrabold {
  font-weight: 800;
}
</style>
