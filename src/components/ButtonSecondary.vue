<template>
    <button type="button" class="secondary-button px-8" :disabled="disabled">
        VER MÁS
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