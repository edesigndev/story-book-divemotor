<template>
  <div class="views views-logo">
    <h1>Logos</h1>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Logo Principal</h5>
          <p class="card-text">Fondo blanco</p>
          <div class="card-component my-4">
            <LogoComponent
              :imgUrl="'https://qa.divemotor.com.pe/o/divemotor-theme/images/divermotor-logo-gray.8f8e1350.svg'"
            />
          </div>
          <pre
            v-highlightjs="
              `<img class='h-5 w-auto' src='https://qa.divemotor.com.pe/o/divemotor-theme/images/divermotor-logo-gray.8f8e1350.svg' alt='DIVEMOTOR'>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
      <div class="card text-center mb-3">
        <div class="card-body card-body-grey">
          <h5 class="card-title">Logo Principal</h5>
          <p class="card-text">Fondo gris</p>
          <div class="card-component my-4">
            <LogoComponent
              :imgUrl="'https://qa.divemotor.com.pe/image/layout_set_logo?img_id=2560265&t=1676550917599'"
            />
          </div>
          <pre
            v-highlightjs="
              `<img class='h-5 w-auto' src='https://qa.divemotor.com.pe/image/layout_set_logo?img_id=2560265&t=1676550917599' alt='DIVEMOTOR'>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title">Logo Principal</h5>
          <p class="card-text">Fondo blanco</p>
          <div class="card-component my-4">
            <LogoComponent
              :imgUrl="'https://qa.divemotor.com.pe/image/layout_set_logo?img_id=2560265&t=1676550917599'"
            />
          </div>
          <pre
            v-highlightjs="
              `<img class='h-5 w-auto' src='https://qa.divemotor.com.pe/image/layout_set_logo?img_id=2560265&t=1676550917599' alt='DIVEMOTOR'>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
  </div>
</template>
