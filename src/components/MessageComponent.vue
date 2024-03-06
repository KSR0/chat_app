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
        <!-- 
        <pre>
            {{ message }}
        </pre>
        -->
        <img :src="message.user.avatar_url" class="mr-3 rounded-full h-14 w-14" alt="avatar">
        <div>{{ message.user.username }}</div>
        <div class="ml-2 text-xs opacity-50"> {{ message.created_at }}</div>
        <button class="ml-2" @click="emit('delete', message.id)"><TrashIcon class="w-5 h-5"/></button> 
    </div>
    {{ message.content }}
</template>