<script setup>
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
const { user } = storeToRefs(useUserStore())
</script>

<template>
    <header class="flex items-center justify-between p-3 bg-slate-700">
        <div v-if="user">Username : {{ user.username }}</div>
        <button class="ml-auto">Se déconnecter</button>
    </header>
</template>