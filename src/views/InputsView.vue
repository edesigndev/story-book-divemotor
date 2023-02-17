<template>
  <div class="views views-inputs">
    <h1>Inputs</h1>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title">Input text</h5>
          <p class="card-text">Fondo negro</p>
          <div class="card-component my-4">
            <InputComponent :showIcon="false" />
          </div>
          <pre
            v-highlightjs="
              `<div class='form-input-dm'>
    <div class='nombre-campo-sub' style='opacity: 0;'>NOMBRE Y APELLIDO *</div>
    <input class='input-campo-dm validateErrorForm' type='text' name='names' placeholder='NOMBRE Y APELLIDO *'>
</div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title">Input text error</h5>
          <p class="card-text">Fondo negro</p>
          <div class="card-component my-4">
            <InputComponent :showIcon="false" :showError="true" />
          </div>
          <pre
            v-highlightjs="
              `<div class='form-input-dm'>
    <div class='nombre-campo-sub' style='opacity: 0;'>NOMBRE Y APELLIDO *</div>
    <input class='input-campo-dm validateErrorForm' type='text' name='names' placeholder='NOMBRE Y APELLIDO *'>
</div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title">Input text icon</h5>
          <p class="card-text">Fondo negro</p>
          <div class="card-component my-4">
            <InputComponent :showIcon="true" />
          </div>
          <pre
            v-highlightjs="
              `<div class='form-input-dm'>
    <div class='nombre-campo-sub' style='opacity: 0;'>NOMBRE Y APELLIDO *</div>
    <input class='input-campo-dm validateErrorForm' type='text' name='names' placeholder='NOMBRE Y APELLIDO *'>
    <div class='icono-form-dm'><img src='/o/divemotor-theme/images/img/ico-cellphone.svg'></div>
</div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Input text</h5>
          <p class="card-text">Fondo blanco</p>
          <div class="card-component my-4">
            <InputComponent :showIcon="true" :inputDark="false" />
          </div>
          <pre
            v-highlightjs="
              `<div class='form-input-dm'>
    <div class='nombre-campo-sub' style='opacity: 0;'>NOMBRE Y APELLIDO *</div>
    <input class='input-campo-dm validateErrorForm' type='text' name='names' placeholder='NOMBRE Y APELLIDO *'>
    <div class='icono-form-dm'><img src='/o/divemotor-theme/images/img/ico-cellphone.svg'></div>
</div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Input text error</h5>
          <p class="card-text">Fondo blanco</p>
          <div class="card-component my-4">
            <InputComponent
              :showIcon="false"
              :inputDark="false"
              :showError="true"
            />
          </div>
          <pre
            v-highlightjs="
              `<div class='form-input-dm'>
    <div class='nombre-campo-sub' style='opacity: 0;'>NOMBRE Y APELLIDO *</div>
    <input class='input-campo-dm validateErrorForm' type='text' name='names' placeholder='NOMBRE Y APELLIDO *'>
    <div class='icono-form-dm'><img src='/o/divemotor-theme/images/img/ico-cellphone.svg'></div>
</div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Input text icon</h5>
          <p class="card-text">Fondo blanco</p>
          <div class="card-component my-4">
            <InputComponent
              :showIcon="true"
              :inputDark="false"
              :showError="false"
            />
          </div>
          <pre
            v-highlightjs="
              `<div class='form-input-dm'>
    <div class='nombre-campo-sub' style='opacity: 0;'>NOMBRE Y APELLIDO *</div>
    <input class='input-campo-dm validateErrorForm' type='text' name='names' placeholder='NOMBRE Y APELLIDO *'>
    <div class='icono-form-dm'><img src='/o/divemotor-theme/images/img/ico-cellphone.svg'></div>
</div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
  </div>
</template>
