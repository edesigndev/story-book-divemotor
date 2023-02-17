<template>
  <div class="views views-radio-button">
    <h1>Colores</h1>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Principal</h5>
          <div class="card-component my-4 flex-row-center">
            <CardColor :colorName="'Azul'" :color="'#0066CC'" />
            <CardColor :colorName="'Negro'" :color="'#000000'" />
            <CardColor :colorName="'Blanco'" :color="'#FFFFFF'" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Secundario</h5>
          <div class="card-component my-4 flex-row-center">
            <CardColor :colorName="'Gris'" :color="'#656F77'" />
            <CardColor :colorName="'Naranja'" :color="'#ff6e00'" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Degradado</h5>
          <div class="card-component my-4 flex-row-center">
            <CardColor
              :colorName="'Degradado I'"
              :color="'#f2f5ff'"
              :ColorTwo="'#8c98a9'"
              :ColorThree="'#3e4d5f'"
              :isDegradientCircle="true"
            />
            <CardColor
              :colorName="'Degradado II'"
              :color="'#003a75'"
              :ColorTwo="'#0165c8'"
              :isDegradientLineal="true"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
