<template>
    <button type="button" class="primary-button px-8" :disabled="disabled">
        VER SERVICIOS
    </button>
</template>
<script setup>
defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
})
</script>
