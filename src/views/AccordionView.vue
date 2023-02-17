<template>
  <div class="views views-dropDown">
    <h1>Accordion</h1>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Accordion Card Footer</h5>
          <p class="card-text">
            Es un card que compone el contenido del footer
          </p>
          <div class="card-component my-4 flex-row-center">
            <AccordionComponent />
          </div>
          <pre
            v-highlightjs="
              `
<div class='block h-full border-secondary-grey pg-item-footer pr-6'>
    <div class='card-accordion card-accordion--footer border-b-1-mb pointer acordion_active'>
        <p class='font-primary text-xl font-extrabold uppercase'>
        POSTVENTA
        </p>
    </div>
        <div class='collapse-accordion' style='display: block;'>
            <ul class='links-footer'>
                    <li id='layout_footer_409'><a href='https://qa.divemotor.com.pe/camiones3' target='_blank'>CAMIONES</a></li>
                    <li id='layout_footer_410'><a href='https://qa.divemotor.com.pe/buses3' target='_blank'>BUSES</a></li>
                    <li id='layout_footer_411'><a href='https://qa.divemotor.com.pe/vans3' target='_blank'>VANS</a></li>
                    <li id='layout_footer_412'><a href='https://qa.divemotor.com.pe/automoviles3' target='_blank'>AUTOMÓVILES</a></li>
            </ul>
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
