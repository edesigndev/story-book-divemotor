<template>
  <div class="views views-pagination">
    <h1>Paginación</h1>
    <section>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Paginación</h5>
          <p class="card-text">
            Es un card que compone el contenido del footer
          </p>
          <div class="card-component my-4 flex-row-center">
            <PaginationComponent />
          </div>
          <pre
            v-highlightjs="
              `
<ul class='page' style='padding-top: 20px'>
    <li class='page-btn'><span class='material-icons'> &lt; </span></li>
    <li class='page-number'>1</li>
    <li class='page-number active'>2</li>
    <li class='page-number'>3</li>
    <li class='page-dots'>...</li>
    <li class='page-number'>12</li>
    <li class='page-number'>13</li>
    <li class='page-btn'><span class='material-icons'>&gt;</span></li>
</ul>
`
            "
          ><code class="html"></code></pre>
        </div>
      </div>
    </section>
  </div>
</template>
