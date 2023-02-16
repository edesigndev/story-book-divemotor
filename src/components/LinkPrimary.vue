<template>
    <button class="link-button-light" type="button" :disabled="disabled">
        <div class="flex flex-row items-center gap-5">
            <span class="font-primary text-lg uppercase tracking-wider"><a href="#">{{ text }}</a></span>
            <div>
                <a href="#">
                    <svg v-if="iconDownload" width="15" height="19" viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="#656F77" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M14 17.5H1M13 9.207 7 15 1 9.207M7 1.001v13.516" />
                        </g>
                    </svg>
                    <svg v-else  width="62" height="62" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(1 1)" stroke="#656f77" stroke-width="2" fill="none" fill-rule="evenodd">
                            <circle cx="30" cy="30" r="30"></circle>
                            <path stroke-linecap="round" stroke-linejoin="round" d="m27 19 10 11-10 11"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </button>
</template>
<script setup>
defineProps({
    text: {
        type: String,
        default: 'VER TODOS'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    iconDownload: {
        type: Boolean,
        default: false
    }
})
</script>