<script setup>
import {ref} from "vue";
import MessageComponent from "@/components/MessageComponent.vue";
const messageContent = ref("");
const messages = ref([]);

function deleteMessage(id) {
    messages.value = messages.value.filter((message) => message.id != id);
}

function addMessage() {
    messages.value.push({
        id: Math.random().toString(36).substring(3),
        content: messageContent.value,
        date: new Date().toLocaleDateString(),
        user: {
            name: "Moi",
            avatar: "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    });
    messageContent.value = "";
}

</script>

<template>
    <div class="p-4">
        <div v-for="(message, index) in messages" :key="index" class="mb-3">
            <message-component :message="message" @delete="deleteMessage"/>
        </div>
    </div>
    <div class="flex p-4">
        <textarea v-model="messageContent" name="message" id="message" rows="1" class="text-black"></textarea>
        <button @click="addMessage" class="p-2 ml-1 bg-blue-500 rounded-md">Envoyer</button>
    </div>
</template>


<!-- Extensions google: vue dev tools -->
<!-- Extensions vscode: ESLint, HeadWind, Material Icon Theme, Prettier, Tailwind, Vue 3 Snippers, Vue Language Feat..., Vue VSCode Snippets -->