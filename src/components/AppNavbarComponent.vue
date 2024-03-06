<script setup>
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
const { user } = storeToRefs(useUserStore())
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router';

const router = useRouter()

async function logout() {
    await supabase.auth.signOut()
    router.push('/login')
}

</script>

<template>
    <header class="flex items-center justify-between p-3 bg-slate-700">
        <div v-if="user">Username : {{ user.username }}</div>
        <button class="ml-auto" @click="logout">Se déconnecter</button>
    </header>
</template>