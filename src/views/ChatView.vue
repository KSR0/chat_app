<script setup>
import {ref} from "vue";
const messageContent = ref("");
const messages = ref([]);

function addMessage() {
    messages.value.push(messageContent.value);
    messageContent.value = "";
}

</script>

<template>
    <div class="p-4">
        <div v-for="(message, index) in messages" :key="index">
            {{ message }}
        </div>
    </div>
    <div class="flex p-4">
        <textarea v-model="messageContent" name="message" id="message" rows="1" class="text-black"></textarea>
        <button @click="addMessage" class="rounded-md bg-blue-400 p-2 ml-1">Envoyer</button>
    </div>
</template>

