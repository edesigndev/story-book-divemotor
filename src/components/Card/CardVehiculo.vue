<template>
  <div
    class="result-card"
    data-name="mercedes-benz"
    data-load="5.7"
    data-model="Accelo"
  >
    <div class="img-card-vehiculo">
      <div class="flex justify-end logo-marca-card">
        <img
          class="img-marca-card"
          src="https://1000marcas.net/wp-content/uploads/2020/10/Logo-Mercedes-Benz-500x311.png"
          alt="Accelo"
        />
      </div>
      <img src="https://www.divemotor.com/cdn/accelolarge.jpg" alt="Accelo" />
    </div>
    <div class="space-height">
      <div class="text-center mt-3">
        <div class="space-height-title">
          <h2 class="font-extrabold font-primary text-black text-xl">Accelo</h2>
        </div>
        <div class="space-height-description">
          <p class="font-paragraph text-black text-lg">
            La estrella de los ligeros
          </p>
        </div>
      </div>

      <div class="result-features">
        <div class="border-r-1 border-black">
          <p class="text-2xl font-bold tracking-wider">4.8</p>
          <p class="text-xs tracking-wide">LT/MOTOR</p>
        </div>

        <div class="border-r-1 border-black">
          <p class="text-2xl font-bold tracking-wider">156</p>
          <p class="text-xs tracking-wide">CV/POTENCIA</p>
        </div>

        <div class="">
          <p class="text-2xl font-bold tracking-wider">5.7</p>
          <p class="text-xs tracking-wide">Carga/A - T</p>
        </div>
      </div>
    </div>
    <div class="result-actions">
      <div class="flex items-center">
        <div class="flex gap-2 items-center">
          <input
            id="default-checkbox3"
            type="checkbox"
            value="product-2734325"
            class="w-10 h-10 text-black border-black chk-comparar"
          />
          <label
            for="default-checkbox3"
            class="text-sm leading-4 tracking-wider font-primary font-medium text-black"
            >COMPARAR VEHÍCULOS</label
          >
        </div>
      </div>

      <div
        class="flex items-center justify-end"
        onclick="tagVehiclesItem('Accelo','2734325','mercedes-benz','Camiones','Catalogo Vehiculos','5.7')"
      >
        <a href="/mercedes-benz-accelo"
          ><button
            class="primary-button text-lg font-medium px-4"
            type="button"
            data-id="product-2734325"
          >
            VER MÁS
          </button></a
        >
      </div>
    </div>
  </div>
</template>
