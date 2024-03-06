import { supabase } from "@/supabase";
import { ref } from "vue";


export const messages = ref([]);

export async function insertMessage(content, author_id) {
    const { error } = await supabase.from("messages").insert({
        content,
        author_id
    })

    if (error) {
        console.error("Error inserting message", error);
    }
}

export async function FetchMessages() {
    const { data, error } = await supabase.from("messages").select('*, user:profiles(username, avatar_url)').order('created_at', { ascending: false }).limit(100)

    if (error) {
        console.error("Error fetching messages", error);
        return 
    }

    messages.value = data.reverse()
}

export function SubscribeToMessage() {
    // Ecouter toutes les nouvelles modif sur la table et permet de refresh les messages lors d'un changement
    supabase.channel('messages_channel').on('postgres_changes', {event: '*', schema: "public", table: "messages"}, () => {
        FetchMessages()
    })
    .subscribe()
}