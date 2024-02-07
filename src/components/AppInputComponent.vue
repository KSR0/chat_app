<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    modelValue: String
})
const emit = defineEmits(['update:modelValue'])

//const value = computed(() => )
</script>

<template>
    <input v-bind="$attrs" class="p-2 rounded-md bg-slate-600"> 
</template>