<template>
    <div class="views views-buttons">
        <h1>Botones</h1>
        <section>
            <h4>Boton Principal </h4>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Normal - Hover - Active</h5>
                    <p class="card-text">Las acciones se muestran al pasar el mouse y hacer click</p>
                    <div class="card-component my-4">
                        <ButtonPrimary />
                    </div>
                    <pre v-highlightjs="
                        `<button type='button' class='primary-button px-8'>VER SERVICIOS</button>`
                    "><code class="html"></code></pre>
                </div>
            </div>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Disabled</h5>
                    <p class="card-text">Es un estado configurado por defecto</p>
                    <div class="card-component my-4">
                        <ButtonPrimary :disabled="true" />
                    </div>
                    <pre v-highlightjs="
                        `<button type='button' class='primary-button px-8'>VER SERVICIOS</button>`
                    "><code class="html"></code></pre>
                </div>
            </div>
        </section>
        <section>

            <h4>Boton Secundario </h4>
            <div class="card text-center mb-3">
                <div class="card-body card-body-dark">
                    <h5 class="card-title">Normal - Hover - Active</h5>
                    <p class="card-text">Las acciones se muestran al pasar el mouse y hacer click</p>
                    <div class="card-component my-4">
                        <ButtonSecondary />
                    </div>
                    <pre v-highlightjs="
                        `<button type='button' class='secondary-button px-8'>VER MÁS</button>`
                    "><code class="html"></code></pre>
                </div>
            </div>
            <div class="card text-center mb-3">
                <div class="card-body card-body-dark">
                    <h5 class="card-title">Disabled</h5>
                    <p class="card-text">Es un estado configurado por defecto</p>
                    <div class="card-component my-4">
                        <ButtonSecondary :disabled="true" />
                    </div>
                    <pre v-highlightjs="
        `<button type='button' class='secondary-button px-8'>VER MÁS</button>`
                    "><code class="html"></code></pre>
                </div>
            </div>
        </section>

    </div>
</template>
