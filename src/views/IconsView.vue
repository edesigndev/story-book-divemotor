<template>
  <div class="views views-tabs">
    <h1>Iconos</h1>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body card-body-dark">
          <h5 class="card-title">Redes sociales</h5>
          <p class="card-text">Ejemplo como facebook. youtube y instagram</p>
          <div class="card-component my-4">
            <list-social-media />
          </div>
          <pre
            v-highlightjs="
              `
<div class='flex-redes'>
    <a href='https://www.facebook.com/MercedesBenzPeru' target='_blank' class='icono-footer-facebook'><img src='https://qa.divemotor.com.pe/o/divemotor-theme/images/img/facebook-white.svg' alt='Facebook'></a>
    <a href='https://www.youtube.com/user/mercedesbenzperu' target='_blank' class='icono-footer-youtube'><img src='https://qa.divemotor.com.pe/o/divemotor-theme/images/img/youtube-white.svg' alt='Youtube'></a>
    <a href='https://www.instagram.com/mercedesbenzperu/?hl=es-la' target='_blank' class='icono-footer-linkedin'><img src='/documents/2405002/2736973/ico-instagram.svg' alt='Instagram'></a>
</div>
  `
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
  </div>
</template>
