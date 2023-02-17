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
  </div>
</template>
