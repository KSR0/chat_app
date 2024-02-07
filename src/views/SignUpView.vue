<script setup>
import AppInputComponent from '@/components/AppInputComponent.vue';

import { reactive } from 'vue';

const {email, username, password} = reactive({
    email: '',
    username: '',
    password: ''
})
</script>

<template>
    <div>
        <form class="flex flex-col gap-2 p-2 mx-auto max-w-96">
            <label for="email">Email</label>
            <app-input-component v-model="email" type="email" id="email" autocomplete="email"/>
            <label for="username">Username</label>
            <app-input-component v-model="username" type="text" id="username" autocomplete="username"/>
            <label for="passowrd">Mot de passe</label>
            <app-input-component v-model="password" type="password" id="password" autocomplete="new-password"/>
            <button type="submit">Créer un compte</button>
        </form>
    </div>
</template>