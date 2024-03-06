<script setup>
import AppInputComponent from '@/components/AppInputComponent.vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase';
import { ref } from 'vue'

const router = useRouter()

const email = ref('')
const username = ref('')
const password = ref('')

const signup = async () => {
    const {error} = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        options: {
            data: {username: username.value}
        }
    })
    if (error) {
        alert(error)    
    } else {
        router.push('/')
    }
}

</script>

<template>
    <div>
        <form @submit.prevent="signup" class="flex flex-col gap-2 p-2 mx-auto max-w-96">
            <label for="email">Email</label>
            <app-input-component v-model="email" type="email" id="email" autocomplete="email" required/>
            <label for="username">Username</label>
            <app-input-component v-model="username" type="text" id="username" autocomplete="username" required/>
            <label for="password">Mot de passe</label>
            <app-input-component v-model="password" type="password" id="password" autocomplete="new-password" required/>
            <button type="submit">Créer un compte</button>
        </form>
    </div>
</template>