import ButtonSlider from '../components/ButtonSlider.vue';

<template>
  <div class="views views-buttons">
    <h1>Botones</h1>
    <section>
      <h4>Boton Principal</h4>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Normal - Hover - Active</h5>
          <p class="card-text">
            Las acciones se muestran al pasar el mouse y hacer click
          </p>
          <div class="card-component my-4">
            <ButtonPrimary />
          </div>
          <pre
            v-highlightjs="
              `<button type='button' class='primary-button px-8'>VER SERVICIOS</button>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Disabled</h5>
          <p class="card-text">Es un estado configurado por defecto</p>
          <div class="card-component my-4">
            <ButtonPrimary :disabled="true" />
          </div>
          <pre
            v-highlightjs="
              `<button type='button' class='primary-button px-8'>VER SERVICIOS</button>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <h4>Boton Secundario</h4>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title">Normal - Hover - Active</h5>
          <p class="card-text">
            Las acciones se muestran al pasar el mouse y hacer click
          </p>
          <div class="card-component my-4">
            <ButtonSecondary />
          </div>
          <pre
            v-highlightjs="
              `<button type='button' class='secondary-button px-8'>VER MÁS</button>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title">Disabled</h5>
          <p class="card-text">Es un estado configurado por defecto</p>
          <div class="card-component my-4">
            <ButtonSecondary :disabled="true" />
          </div>
          <pre
            v-highlightjs="
              `<button type='button' class='secondary-button px-8'>VER MÁS</button>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <h4>Boton Slider</h4>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Normal</h5>
          <p class="card-text">Se utiliza cuando se navega entre contenidos</p>
          <div class="card-component my-4">
            <ButtonSlider />
          </div>
          <pre
            v-highlightjs="
              `<button class='slick-prev slick-arrow' type='button'></button>
<button class='slick-next slick-arrow' type='button'></button>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <h4>Boton Marca</h4>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Normal</h5>
          <p class="card-text">Se utiliza para seleccionar la marca</p>
          <div class="card-component my-4 flex-row-center">
            <ButtonCarrusel
              :imgUrl="'https://qa.divemotor.com.pe/documents/2405002/2738307/logo-marca3.png/ff649630-4cf9-cc17-709a-573eab19a1e3?t=1674055324644'"
            />
            <ButtonCarrusel
              :imgUrl="'https://qa.divemotor.com.pe/documents/2405002/2738307/logo-marca4.png/32b0b454-679c-d828-4541-ac5fed9d442b?t=1674055324805'"
            />
          </div>
          <pre
            v-highlightjs="
              `<div class='button-carousel-sm' style='width: 100%; display: inline-block;'>
  <button class='tablinks'>
    <img src='urlImagen' alt=''>
  </button>
</div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
  </div>
</template>
