<script setup>
import { TrashIcon } from "@heroicons/vue/24/solid"
defineProps({
    message: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['delete'])
</script>

<template>
    <div class="flex items-center">
        <img :src="message.user.avatar" class="mr-3 rounded-full h-14 w-14" alt="avatar">
            <div>{{ message.user.name }}</div>
            <div class="ml-2 text-xs opacity-50"> {{ message.date }}</div>
            <button class="ml-2" @click="emit('delete', message.id)"><TrashIcon class="w-5 h-5" /></button>
    </div>
    {{ message.content }}
</template>