<script setup>
import AppInputComponent from '@/components/AppInputComponent.vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase';
import { ref } from 'vue';

const router = useRouter();

const email = ref('');
const password = ref('');

async function login() {
    const {error} = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
    if (error) {
        alert(error)  
    } else {
        router.push('/');
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="login" class="flex flex-col gap-2 p-2 mx-auto max-w-96">
            <label for="email">Email</label>
            <app-input-component v-model="email" type="email" id="email" autocomplete="email" required/>
            <label for="password">Mot de passe</label>
            <app-input-component v-model="password" type="password" id="password" autocomplete="password" required/>
            <button type="submit" class="p-2 mt-3 border-2 border-white rounded-md bg-slate-500 hover:bg-slate-300 hover:border-black hover:text-black">Se connecter</button>
        </form>
    </div>
</template>