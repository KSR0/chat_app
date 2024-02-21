<!-- eslint-disable no-unused-vars -->
<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

//const value = computed(() => )
</script>

<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" class="p-2 rounded-md bg-slate-600" />
</template>
