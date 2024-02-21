<script setup>
import { supabase } from '@/supabase'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'

onMounted(async () => {
    supabase.auth.onAuthStateChange((event, session) => {
        useUserStore().fetchUserProfile(session?.user?.id)
    })
})
</script>

<template>
    <div class="h-full text-white bg-blue-950">
        <router-view></router-view>
    </div>
    
</template>

<style scoped></style>
