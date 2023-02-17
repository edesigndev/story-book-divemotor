<template>
  <div class="views views-tabs">
    <h1>Tabs</h1>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Tab Vertical</h5>
          <p class="card-text">Ejemplo en preguntas frecuentes</p>
          <div class="card-component my-4">
            <TabVertical />
          </div>
          <pre
            v-highlightjs="
              `
<div class='content-tabs-link no-responsive pt-30'>
    <li class='tab-link tab-link-lateral tab-active' data-tab='tabCentro1'>VENTAS</li>
    <li class='tab-link tab-link-lateral' data-tab='tabCentro2'>POSTVENTA</li>
    <li class='tab-link tab-link-lateral' data-tab='tabCentro3'>PROTOCOLOS DE <br>BIOSEGURIDAD</li>
</div>
`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Tab Vertical</h5>
          <p class="card-text">Ejemplo en versiones</p>
          <div class="card-component my-4">
            <TabHorizontal />
          </div>
          <pre
            v-highlightjs="
              `
<div class='content-tab-link-web no-responsive'>
    <div class='tab-link-vehiculo dm-tab-active' data-tab='tab1'>CHASIS OF 1721</div>
    <div class='tab-link-vehiculo' data-tab='tab2'>CHASIS OF 1721 LARGE</div>
    <div class='tab-link-vehiculo' data-tab='tab3'>CHASIS OF 1721 PREMIUM</div>
    <div class='btn-tab-cotiza'>
        <a href='https://d19e5ez6occb4z.cloudfront.net/contacta-asesor.html'>
            <button class='primary-button primary-button--submenu' type='button'>COTIZA AQUÍ</button>
        </a>
    </div>
</div>
`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
  </div>
</template>
