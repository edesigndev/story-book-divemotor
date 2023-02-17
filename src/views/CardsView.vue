<template>
  <div class="views views-cards">
    <h1>Cards</h1>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Card Concesionario</h5>
          <p class="card-text">Ejemplo de un concesionario</p>
          <div class="card-component my-4 flex-row-center">
            <CardConcesionario />
          </div>
          <pre
            v-highlightjs="
              `
<div class='result-card-cs context-2640490' style='min-height: 669px;'>
    <div class='flex justify-end img-concesionario'> 		
        <img src='/documents/2405002/2784072/sede_dnueve.webp/97033806-7298-5b54-4308-c7d904320cc6' alt='undefined - DIVEMOTOR'>	
    </div>	
    <div class='mt-3' style='padding: 0 20px;'>		
        <div class='space-height-title'>		    
            <h3 class='font-extrabold font-primary text-black text-xl'>AV. CANADA - VENTA Y TALLER</h3>		
        </div>	
    </div>	
    <div class='tab'>
        <div class='tooltip' style='opacity:inherit;'>
            <button class='tablinks defaultOpen active' onclick='openMaker2(event, '2640490-mercedes-benz')'>	
                <img src='/documents/2405002/2616844/logo-mercedes-benz.webp' alt='mercedes-benz - DIVEMOTOR'>   
            </button>   
            <span class='tooltiptext toltip1'>mercedes benz</span>
        </div>	
        <div style='clear: both'></div>
    </div>	
    <div id='2640490-mercedes-benz' class='tabcontent' style='display: block;'>	    
        <div class='card-cs-opciones'>   
            <div class='card-opcion'>	    
                <img src='/documents/2405002/2641074/ico-venta-vehiculos.svg' alt='mercedes-benz - DIVEMOTOR'>	    
                <span class='titulo-card-cs-opciones'>VENTA VEHICULOS</span>	    
                <img src='https://qa.divemotor.com.pe/o/divemotor-theme/images/img/ico-informacion.svg' alt='mercedes-benz - DIVEMOTOR'>	    
                <div class='tooltip-card'>		    
                    <div class='close-tooltip'>
                        <img src='https://qa.divemotor.com.pe/o/divemotor-theme/images/img/ico-equis.png' style='margin: 0; width: auto;'></div>		    
                        <b> venta vehiculos para: </b>Automóviles.	    
                    </div>   
                </div>	    
            </div>	
        </div>	
    <div class='card-cs-detalle'>	    
        <div class='card-cs-detalle-direccion'>		    
            <div>Av. Canada N° 1160, La Victoria <b>Miraflores</b></div>		    
            <div>(01) 712-2000</div>	    
        </div>	    
    <div class='card-cs-detalle-horario'>		    
        <div><b>Horario de atención</b></div>		    
        <div>Lun-Vie: 08:30 - 17:45  | Sab: 08:30 - 13:00</div>	    
    </div>	</div>	<div class='result-actions-cs'>		
        <div class='flex items-center'>			
            <button class='primary-button primary-button--concesionario' data-long='-77.012771' data-lat='-12.084093' type='button'>MAPA</button>		
        </div>		
        <div class='flex items-center justify-end app-concesionarios'>			
            <a target='_blank' href='https://www.google.com/maps/place/12%C2%B005'02.7%22S+77%C2%B000'46.0%22W/@-12.084093,-77.0149597,712m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-12.084093!4d-77.012771' class=' tabindex='0'>
                <img src='https://qa.divemotor.com.pe/o/divemotor-theme/images/img/maps-responsive-card.png'>
            </a>			
            <a target='_blank' href='https://waze.com/ul/h6mc5r81j2' class=' tabindex='0'><img src='https://qa.divemotor.com.pe/o/divemotor-theme/images/img/waze-responsive-card.png'></a>		
        </div>	
    </div>
</div>
`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Card Vehiculo</h5>
          <p class="card-text">Se pueden encontrar en camiones, vans y buses</p>
          <div class="card-component my-4 flex-row-center">
            <CardVehiculo />
          </div>
          <pre
            v-highlightjs="
              `
<div class='result-card' data-name='mercedes-benz' data-load='5.7' data-model='Accelo'>
    <div class='img-card-vehiculo'>
        <div class='flex justify-end logo-marca-card'>
            <img class='img-marca-card' src='/documents/2405002/2616937/logo-mercedes-benz.webp/ee7b84ee-0084-9b88-d5f2-79bb88a8f455' alt='Accelo'>
        </div>
        <img src='/documents/2405002/2646620/ACCELO - 1070x640.webp/6dffaf42-1e74-0944-2a17-039fa2e5307d' alt='Accelo'>
    </div>
    <div class='space-height'>
        <div class='text-center mt-3'>
        <div class='space-height-title'>
            <h2 class='font-extrabold font-primary text-black text-xl'>Accelo</h2>
        </div>
        <div class='space-height-description'>
            <p class='font-paragraph text-black text-lg'>La estrella de los ligeros</p>
        </div>
        </div>

        <div class='result-features'>
        <div class='border-r-1 border-black'>
            <p class='text-2xl font-bold tracking-wider'>4.8</p>
            <p class='text-xs tracking-wide'>LT/MOTOR</p>
        </div>

        <div class='border-r-1 border-black'>
            <p class='text-2xl font-bold tracking-wider'>156</p>
            <p class='text-xs tracking-wide'>CV/POTENCIA</p>
        </div>

        <div class='>
            <p class='text-2xl font-bold tracking-wider'>5.7</p>
            <p class='text-xs tracking-wide'>Carga/A - T</p>
        </div>
        </div>
    </div>
    <div class='result-actions'>
        <div class='flex items-center'>
            <div class='flex gap-2 items-center'>
                <input id='default-checkbox3' type='checkbox' value='product-2734325' data-modelo='Accelo' data-marca='mercedes-benz' data-imagen='/documents/2405002/2646620/ACCELO - 1070x640.webp/6dffaf42-1e74-0944-2a17-039fa2e5307d' data-identificador='product-2734325' class='w-10 h-10 text-black border-black chk-comparar'>
                <label for='default-checkbox3' class='text-sm leading-4 tracking-wider font-primary font-medium text-black'>COMPARAR VEHÍCULOS</label>
            </div>
        </div>

        <div class='flex items-center justify-end' onclick='tagVehiclesItem('Accelo','2734325','mercedes-benz','Camiones','Catalogo Vehiculos','5.7')'>
            <a href='/mercedes-benz-accelo'><button class='primary-button text-lg font-medium px-4' type='button' data-id='product-2734325'>VER MÁS</button></a>
        </div>
    </div>
</div>
`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Card Comparador</h5>
          <p class="card-text">
            Se pueden encontrar en comparacion de camiones, vans y buses
          </p>
          <div class="card-component my-4 flex-row-center">
            <CardComparador />
          </div>
          <pre
            v-highlightjs="
              `
<div class='lista-column' style='padding-bottom: 0;' id='lista-column-1'>
    <div class='item-dimensiones'>
        <div class='content-img-dimension'>
            <img src='/documents/2405002/2646620/ACCELO - 1070x640.webp/6dffaf42-1e74-0944-2a17-039fa2e5307d' alt='Imagen de carro'>
        </div>
    </div>

    <p class='font-extrabold font-primary text-black fz-30 mt-10'>Accelo</p>
    <div class='result-features result-features--comparar'>
        <div class='border-r-1 border-white'>
            <p class='text-2xl font-bold tracking-wider'>4.8</p>
            <p class='text-xs tracking-wide'>LT/MOTOR</p>
        </div>
        <div class='border-r-1 border-white'>
            <p class='text-2xl font-bold tracking-wider'>156</p>
            <p class='text-xs tracking-wide'>CV/POTENCIA</p>
        </div>
        <div class='>
            <p class='text-2xl font-bold tracking-wider'>5.7</p>
            <p class='text-xs tracking-wide'>Carga/A - T</p>
        </div>
    </div>

    <div class='color-vehiculo-comparar border-b-1 border-secondary-grey'>
        <div class='color-vehiculo color-vehiculo-Blanco' style='background: rgb(255 255 255);'>
            <div class='color-aro-vehiculo'><svg id='a' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 106.3 106.3'><defs><style>.b{fill:#fff;}</style></defs><path class='b' d='M53.15,0C23.8,0,0,23.8,0,53.15s23.8,53.15,53.15,53.15,53.15-23.8,53.15-53.15S82.5,0,53.15,0Zm0,90.72c-20.75,0-37.57-16.82-37.57-37.57S32.4,15.58,53.15,15.58s37.57,16.82,37.57,37.57-16.82,37.57-37.57,37.57Z'></path></svg></div>
            <div class='color-nombre'>Blanco</div>
        </div>

        <div class='color-vehiculo color-vehiculo-Rojo color-vehiculo--active' style='background: rgb(255 0 0);'>
            <div class='color-aro-vehiculo'><svg id='a' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 106.3 106.3'><defs><style>.b{fill:#fff;}</style></defs><path class='b' d='M53.15,0C23.8,0,0,23.8,0,53.15s23.8,53.15,53.15,53.15,53.15-23.8,53.15-53.15S82.5,0,53.15,0Zm0,90.72c-20.75,0-37.57-16.82-37.57-37.57S32.4,15.58,53.15,15.58s37.57,16.82,37.57,37.57-16.82,37.57-37.57,37.57Z'></path></svg></div>
            <div class='color-nombre'>Rojo</div>
        </div>

        <div class='color-vehiculo color-vehiculo-Azul' style='background: rgb(0 0 204);'>
            <div class='color-aro-vehiculo'><svg id='a' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 106.3 106.3'><defs><style>.b{fill:#fff;}</style></defs><path class='b' d='M53.15,0C23.8,0,0,23.8,0,53.15s23.8,53.15,53.15,53.15,53.15-23.8,53.15-53.15S82.5,0,53.15,0Zm0,90.72c-20.75,0-37.57-16.82-37.57-37.57S32.4,15.58,53.15,15.58s37.57,16.82,37.57,37.57-16.82,37.57-37.57,37.57Z'></path></svg></div>
            <div class='color-nombre'>Azul</div>
        </div>

        <div class='color-vehiculo color-vehiculo-Amarillo' style='background: rgb(255 255 0);'>
            <div class='color-aro-vehiculo'><svg id='a' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 106.3 106.3'><defs><style>.b{fill:#fff;}</style></defs><path class='b' d='M53.15,0C23.8,0,0,23.8,0,53.15s23.8,53.15,53.15,53.15,53.15-23.8,53.15-53.15S82.5,0,53.15,0Zm0,90.72c-20.75,0-37.57-16.82-37.57-37.57S32.4,15.58,53.15,15.58s37.57,16.82,37.57,37.57-16.82,37.57-37.57,37.57Z'></path></svg></div>
            <div class='color-nombre'>Amarillo</div>
        </div>
    </div>
    <div class='content-btn-cotizar'>
        <button class='primary-button primary-button--medium primary-button--comparar' type='button' onclick='window.open('https://forms.divemotor.com/camiones/?utm_source=web-divemotor', '_blank');'>COTIZAR AQUÍ</button>
        <a href='/mercedes-benz-accelo' class='btn-link-web mt-20 btn-link-web--comparar' style='justify-content: center;'>MÁS INFORMACIÓN &nbsp; <img src='/o/divemotor-theme/images/img/ico-derecha-gris.svg' width='60' height='60'></a>
    </div>
</div>
`
            "
          >
            <code class="html"></code>
            </pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Card Novedades</h5>
          <p class="card-text"></p>
          <div class="card-component my-4 flex-row-center">
            <CardNovedades />
          </div>
          <pre
            v-highlightjs="
              `
<ul class='card-campania' data-page='1'>
    <div style='display: none'>
      https://qa.divemotor.com.pe/ram-700-la-nueva-pickup-que-reinventa-el-segmento-de-carga-liviana
    </div>
    <li class='card'>
      <span class='card-span-blur'> Autos </span>

      <img
        src='https://qa.divemotor.com.pe/documents/2405002/2830068/banner-novedades.png/2e438418-e989-87db-c2ba-13c3c06a2db7'
        alt=''
      />

      <div class='card-body'>
        <h3>
          Ram 700 la nueva pickup que reinventa el segmento de carga liviana.
        </h3>
        <p class='acortar-texto'>
          Este nuevo modelo incluye 3 versiones, cada una pensada en cubrir
          distintas necesidades, caracterizándose además por su espacio,
          tecnología y seguridad.
        </p>
        <a
          href='https://qa.divemotor.com.pe/ram-700-la-nueva-pickup-que-reinventa-el-segmento-de-carga-liviana'
          class='color-slate-grey
          ><img
            src='https://qa.divemotor.com.pe/o/divemotor-theme/images/img/ico-flecha-simple-derecha.svg'
            class='btn-circle-arrow-2'
            alt=''
        /></a>
        <p>
          <img
            src='https://qa.divemotor.com.pe/o/divemotor-theme/images/img/ico-calendar.svg'
            class='span-card-calendar'
            alt=''
          />
          31 Jan, 2023
        </p>
      </div>
    </li>
  </ul>
`
            "
          >
            <code class="html"></code>
            </pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title mb-6">Card - No te decides</h5>
          <p class="card-text"></p>
          <div class="card-component my-4 flex-row-center">
            <CardNoTeDecides />
          </div>
          <pre
            v-highlightjs="
              `
<div class='container--especialista-camion'>
    <div class='content-detalle-2 content-detalle-2--especialista'>
      <div class='mt-100 mb-100 vehiculo-especialista-texto'>
        <h2 class='titulo-tag-vehiculo font-extrabold letspac-1'>
          ¿NO TE DECIDES?
        </h2>
        <p class='font-paragraph letspac-1 fz-18 mt-20'>
          Compara el NUEVO ACCELO con otros modelos de camiones o contacta a un
          especialista que gustosos atenderemos tus dudas o consultas.
        </p>
        <a href='#'>
          <button
            class='primary-button btn-estilo2-primary no-responsive'
            type='button'
          >
            CONTACTA A UN ESPECIALISTA
          </button></a
        >
        <a
          href='#'
          class='btn-link-web font-medium color-slate-grey letspac-1 fz-18 mt-20'
          >COMPARA TU VEHÍCULO &nbsp;
          <img
            src='https://qa.divemotor.com.pe/o/divemotor-theme/images/img/ico-derecha-gris.svg'
            width='60'
            height='60'
            alt=''
        /></a>
      </div>
      <div class='img-contacto-vehiculo'>
        <img
          src='https://www.divemotor.com/cdn/0dc7613743.jpg'
          class='img100'
          alt='OF 917/48 - DIVEMOTOR'
        />
      </div>
    </div>
  </div>
`
            "
          >
            <code class="html"></code>
            </pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div
          class="card-body card-body-dark"
          style="
            background-image: url(https://s1.1zoom.me/big0/830/2020_Czinger_21C_Night_Headlights_581064_1280x720.jpg);
          "
        >
          <h5 class="card-title">Card - Testimonios</h5>
          <p class="card-text"></p>
          <div class="card-component my-4 flex-row-center">
            <CardTestimonio />
          </div>
          <pre
            v-highlightjs="
              `
<div class='bloque-testimonio mt-40p'>
    <div class='font-extrabold letspac-1 color-white fz-30'>
      MÁS TESTIMONIOS
    </div>
    <p class='font-paragraph letspac-1 fz-18 color-white mt-20'>
      Visita nuestro canal en Youtube para enterarte qué tenemos de nuevo y los
      testimonios de nuestros clientes.
    </p>
    <a href='#' class='btn-testimonio'
      >DIVEMOTOR
      <img
        src='https://qa.divemotor.com.pe/o/divemotor-theme/images/img/ico-youtube.png'
        class=''
        style='display: inline-block'
        alt=''
    /></a>
</div>
`
            "
          >
            <code class="html"></code>
            </pre>
        </div>
      </div>
    </section>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Card - Busqueda</h5>
          <p class="card-text"></p>
          <div class="card-component my-4 flex-row-center">
            <CardSearch />
          </div>
          <pre
            v-highlightjs="
              `
<div class='item-search pt-30'>
    <div class='item-search-logo'>
        <img src='https://www.divemotor.com/cdn/accelolarge.jpg' alt='' />
    </div>
    <div class='item-search-content'>
        <span class='item-search-title'>Baner Concesionario</span>
        <p>
            Búsqueda Nuestros concesionarios Utiliza el mapa o los filtros para
            ubicar el concesionario que necesitas. MAPA<br />
        </p>

        <a href='https://qa.divemotor.com.pe/concesionarios#keyword-Baner Concesionario-' class='btn-link-web font-medium color-slate-grey letspac-1 fz-18 item-link'>VER ENLACE &nbsp;
            <img src='https://qa.divemotor.com.pe/o/divemotor-theme/images/img/ico-derecha-gris.svg' alt='' />
        </a>
    </div>
</div>
`
            "
          >
            <code class="html"></code>
            </pre>
        </div>
      </div>
    </section>
  </div>
</template>
