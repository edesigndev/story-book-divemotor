<template>
  <div class="views views-radio-button">
    <h1>Radio Button</h1>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title">Radio Button text</h5>
          <p class="card-text">Fondo negro</p>
          <div class="card-component my-4 flex-row-center">
            <CheckboxComponent />
          </div>
          <pre
            v-highlightjs="
              `<div class='content-checkbox'>
    <label class='checkbox'>Quiero recibir publicidad sobre ofertas, productos y eventos.
      <input type='checkbox' >
      <span class='check'></span>
    </label>
  </div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Radio Button text</h5>
          <p class="card-text">Fondo blanco</p>
          <div class="card-component my-4">
            <CheckboxComponent :inputDark="false" />
          </div>
          <pre
            v-highlightjs="
              `<div class='content-checkbox'>
    <label class='checkbox'>Quiero recibir publicidad sobre ofertas, productos y eventos.
      <input type='checkbox' >
      <span class='check'></span>
    </label>
  </div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Radio Button text disabled</h5>
          <p class="card-text">Fondo blanco</p>
          <div class="card-component my-4">
            <CheckboxComponent :inputDark="false" :disabled="true" />
          </div>
          <pre
            v-highlightjs="
              `<div class='content-checkbox'>
    <label class='checkbox'>Quiero recibir publicidad sobre ofertas, productos y eventos.
      <input type='checkbox' >
      <span class='check disabled'></span>
    </label>
  </div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
  </div>
</template>
