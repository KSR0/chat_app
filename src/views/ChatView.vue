<script setup>
import MessageComponent from "@/components/MessageComponent.vue";
import AppNavbarComponent from "@/components/AppNavbarComponent.vue";
import {onMounted, ref, watchEffect} from "vue";
import { insertMessage, messages, FetchMessages, SubscribeToMessage } from "@/api/messages";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const { user } = storeToRefs(useUserStore())

const messageContent = ref(""); //ref pour rendre la variable dynamique, permet de mettre a jour la page ds le naviguateur

SubscribeToMessage()
onMounted( async () => {
    await FetchMessages()
    scrollToBottom()
})

function deleteMessage(id) {
    messages.value = messages.value.filter((message) => message.id != id);
}

function addMessage() {
    if (!messageContent.value.trim()) return
    console.log(messageContent.value.trim())
    insertMessage(messageContent.value.trim(), user.value.id)
    messageContent.value = ""

    FetchMessages()
    scrollToBottom()
}

const messagesContainer = ref(null)

function scrollToBottom() {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
}

watchEffect(() => {
    if (messages.value.length) {
        scrollToBottom()
    }
})

</script>

<template>
    <div class="flex flex-col h-full overflow-hidden bg-blue-950">
        <app-navbar-component/>
        <div class="p-4 overflow-y-scroll text-2xl grow" ref="messagesContainer">
            <div v-for="(message, index) in messages" :key="index" class="mb-3">
                <message-component :message="message" @delete="deleteMessage"/>
            </div>
        </div>
        <div class="flex p-4">
            <textarea v-model="messageContent" @keyup.enter.exact="addMessage" name="message" id="message" rows="1" class="p-1 text-2xl text-black border-2 rounded-2xl"></textarea> <!-- "v-model" pour lié l'input au messageContent -->
            <button @click="addMessage" class="p-3 ml-3 text-2xl bg-blue-500 border-2 rounded-2xl hover:bg-blue-700 hover:border-blue-500">Envoyer</button>
        </div>
    </div>
</template>


<!-- Extensions google: vue dev tools -->
<!-- Extensions vscode: ESLint, HeadWind, Material Icon Theme, Prettier, Tailwind, Vue 3 Snippers, Vue Language Feat..., Vue VSCode Snippets -->@/api/messages