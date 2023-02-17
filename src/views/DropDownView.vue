<template>
  <div class="views views-dropDown">
    <h1>DropDown</h1>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title">DropDown Multi</h5>
          <p class="card-text">Fondo negro</p>
          <div class="card-component my-4 flex-row-center">
            <DropDownMulti />
          </div>
          <pre
            v-highlightjs="
              `<div class='content-filtro-motivo'>
  <div class='content-select-filtro content-select-filtro--active'>
    <div class='dato-seleccionado'>
      SELECCIONA EL MOTIVO QUE DESEES
    </div>
    <div class='listaselect' style='display: block;'>
      <div class='select-column-3'>
        <ul class='item-listaselect'>
          <li>
            <a href='javascript:;' data-value='1'><img src='/o/divemotor-theme/images/img/ico-cotiza.svg' class='item-icono-select'>Cotiza
              tu vehículo</a>
          </li>
          <li>
            <a href='javascript:;' data-value='2'><img src='/o/divemotor-theme/images/img/white/ico-t-cnico.svg' class='item-icono-select'>Servicios Postventa</a>
          </li>
          <li>
            <a href='javascript:;' data-value='3'><img src='/o/divemotor-theme/images/img/white/ico-venta.svg' class='item-icono-select'>Venta de Repuestos</a>
          </li>
          <li>
            <a href='javascript:;' data-value='4'><img src='/o/divemotor-theme/images/img/white/ico-diveusados.svg' class='item-icono-select'>Diveusados</a>
          </li>
        </ul>
      <div class='linea-divisora-vertical-white'></div>
        <ul class='item-listaselect'>
          <li>
            <a href='javascript:;' data-value='1'><img src='/o/divemotor-theme/images/img/white/ico-message.svg' class='item-icono-select'>Contactar con asesor</a>
          </li>
          <li>
            <a href='javascript:;' data-value='2'><img src='/o/divemotor-theme/images/img/white/ico-planchado.svg' class='item-icono-select'>Planchado y Pintura</a>
          </li>
          <li>
            <a href='javascript:;' data-value='3'><img src='/o/divemotor-theme/images/img/white/ico-accesorios.svg' class='item-icono-select'>Accesorios y Lifestyle</a>
          </li>
        </ul>
      </div>
    </div>
    <span class='icono-select'></span>
  </div>
</div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title">DropDown List Icon</h5>
          <p class="card-text">Fondo negro</p>
          <div class="card-component my-4 flex-row-center">
            <DropDownList :text="'MARCA'" />
          </div>
          <pre
            v-highlightjs="
              `<div class='content-filtro-marca'>
  <div class='content-select-filtro content-select-filtro--active'>
    <div class='dato-seleccionado'>
      MARCA
    </div>
    <div class='listaselect' style='display: block;'>
      <ul class='item-listaselect'>
        <li>
          <a href='javascript:;' data-value='1'><img src='/o/divemotor-theme/images/img/marca.png' class='item-icono-select' width='24'>Mercedes-Benz</a>
        </li>
        <li>
          <a href='javascript:;' data-value='2'><img src='/o/divemotor-theme/images/img/marca.png' class='item-icono-select' width='24'>Freightliner</a>
        </li>
        <li>
          <a href='javascript:;' data-value='3'><img src='/o/divemotor-theme/images/img/marca.png' class='item-icono-select' width='24'>FIAT</a>
        </li>
        <li>
          <a href='javascript:;' data-value='4'><img src='/o/divemotor-theme/images/img/marca.png' class='item-icono-select' width='24'>JEEP</a>
        </li>
      </ul>
    </div>
    <span class='icono-select'></span>
  </div>
</div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title">DropDown List</h5>
          <p class="card-text">Fondo negro</p>
          <div class="card-component my-4 flex-row-center">
            <DropDownList :text="'MARCA'" :showIcon="false" />
          </div>
          <pre
            v-highlightjs="
              `<div class='content-filtro-marca'>
  <div class='content-select-filtro content-select-filtro--active'>
    <div class='dato-seleccionado'>
      MARCA
    </div>
    <div class='listaselect' style='display: block;'>
      <ul class='item-listaselect'>
        <li>
          <a href='javascript:;' data-value='1'>Mercedes-Benz</a>
        </li>
        <li>
          <a href='javascript:;' data-value='2'>Freightliner</a>
        </li>
        <li>
          <a href='javascript:;' data-value='3'>FIAT</a>
        </li>
        <li>
          <a href='javascript:;' data-value='4'>JEEP</a>
        </li>
      </ul>
    </div>
    <span class='icono-select'></span>
  </div>
</div>`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
  </div>
</template>
