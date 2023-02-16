<template>
    <div class="views views-buttons">
        <h1>Enlaces</h1>
        <section>
            <h4>Enlace redirecion</h4>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Normal - Hover - Active</h5>
                    <p class="card-text">Las acciones se muestran al pasar el mouse y hacer click</p>
                    <div class="card-component my-4">
                        <LinkPrimary />
                    </div>
                    <pre v-highlightjs="
                        `<button type='button' class='link-button-light' >`
                    "><code class="html"></code></pre>
                </div>
            </div>
        </section>
        <section>
            <h4>Enlace descarga</h4>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Normal - Hover - Active</h5>
                    <p class="card-text">Las acciones se muestran al pasar el mouse y hacer click</p>
                    <div class="card-component my-4">
                        <LinkPrimary :text="'FICHA TÉCNICA'" :iconDownload="true"/>
                    </div>
                    <pre v-highlightjs="
                        `<button type='button' class='link-button-light' >`
                    "><code class="html"></code></pre>
                </div>
            </div>
        </section>
    </div>
</template>
