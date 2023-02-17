<template>
  <div class="views views-typografy">
    <h1>Tipografía</h1>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title mb-3">Titulo y descripción</h5>
          <div
            class="card-component my-4 flex-column-center flex-column-center--start"
          >
            <div class="titulo-tag-vehiculo font-extrabold letspac-1">
              CREZCAMOS JUNTOS
            </div>
            <p class="mt-20">
              En Divemotor estamos creciendo permanentemente. Esto se aplica a
              tu negocio, a nuestro equipo y a la felicidad de todos.
            </p>
          </div>
          <pre
            v-highlightjs="
              `
<div class='titulo-tag-vehiculo font-extrabold letspac-1'>CREZCAMOS JUNTOS</div>
<p class='mt-20'>
    En Divemotor estamos creciendo permanentemente. Esto se aplica a tu negocio, a nuestro equipo y a la felicidad de todos.
</p>
`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title mb-3">Titulo tag vehiculo</h5>
          <div class="card-component my-4 flex-row-center">
            <div
              class="titulo-tag-vehiculo color-white font-extrabold letspac-1"
            >
              NUESTRAS
            </div>
          </div>
          <pre
            v-highlightjs="
              `
<div class='titulo-tag-vehiculo color-white font-extrabold letspac-1'>
    NUESTRAS
</div>
`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title mb-3">Titulo gradiente gris</h5>
          <div class="card-component my-4 flex-row-center">
            <div
              class="gradient-grey-text mt-4 font-primary text-6xl font-extrabold uppercase tracking-wider titulo-aliado-home inline-block"
            >
              CIFRAS
            </div>
          </div>
          <pre
            v-highlightjs="
              `
<div class='gradient-grey-text mt-4 font-primary text-6xl font-extrabold uppercase tracking-wider titulo-aliado-home inline-block'>
    CIFRAS
</div>
`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title mb-3">Subtitulo</h5>
          <div class="card-component my-4 flex-row-center">
            <div class="subtitulo-conoce color-white">
              <i>HABLAN POR NOSOTROS</i>
            </div>
          </div>
          <pre
            v-highlightjs="
              `
<div class='subtitulo-conoce color-white'>
    <i>HABLAN POR NOSOTROS</i>
</div>
`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title mb-3">Ejemplo</h5>
          <div class="card-component my-4 flex-column-center">
            <div class="item">
              <div
                class="titulo-tag-vehiculo font-extrabold letspac-1 color-white fz-60 mb-10"
              >
                9 AÑOS
              </div>
              <div class="subtitulo-conoce color-white">CONSECUTIVOS</div>
              <div
                class="font-extrabold letspac-1 color-white fz-30"
                style="line-height: normal"
              >
                COMO EMPRESA LÍDER EN VENTAS DE VEHÍCULOS PESADOS
              </div>
            </div>
          </div>

          <pre
            v-highlightjs="
              `
<div class='item-column-tiempo'>
    <div class='titulo-tag-vehiculo font-extrabold letspac-1 color-white fz-60 mb-10'>9 AÑOS</div>
    <div class='subtitulo-conoce color-white'>CONSECUTIVOS</div>
    <div class='font-extrabold letspac-1 color-white fz-30' style='line-height: normal;'>COMO EMPRESA LÍDER EN VENTAS DE VEHÍCULOS PESADOS</div>
</div>
`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.item {
  max-width: 400px;
  text-align: left;
}
.titulo-tag-vehiculo {
  font-size: 40px;
  line-height: 40px;
  font-family: Work Sans;
}
.mt-20 {
  margin-top: 20px;
}

p {
  font-size: 18px;
  font-family: PT Sans;
}

.color-white {
  color: #fff;
}
.letspac-1 {
  letter-spacing: 1px;
}
.font-extrabold {
  font-weight: 800;
}
.tracking-wider {
  letter-spacing: 0.05em;
}
.uppercase {
  text-transform: uppercase;
}
.fz-60 {
  font-size: 60px;
}
.font-extrabold {
  font-weight: 800;
}
.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}
.font-primary {
  font-family: Work Sans;
}
.mt-4 {
  margin-top: 1rem;
}
.gradient-grey-text {
  background: linear-gradient(
    90deg,
    #f2f5ff,
    #f2f5ff,
    #3e4d5f,
    #8c98a9,
    #f2f5ff
  );
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
}
.subtitulo-conoce {
  font-size: 40px;
  font-weight: 300;
  font-stretch: normal;
  font-family: Work Sans;
  letter-spacing: 1.33px;
}
.flex-column-center {
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  gap: inherit !important;
  align-items: center;
}
</style>
