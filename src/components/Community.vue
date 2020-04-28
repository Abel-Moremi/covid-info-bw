<template>
<v-container>
  <v-layout row>
    <v-flex xs12>
      <h2 class="text-center"><strong>Share some words of comfort with fellow Batswana.</strong></h2>
    </v-flex>
  </v-layout>
    <popup />
    
    <div v-for="message in messages.slice().reverse()"
      :key="message.id"> 
        <communitycard :place="`${message.place}`" :message="`${message.message}`" :date="`${new Date(message.createdAt *1000).toUTCString().slice(0, 12)}`" :author="`${message.name}`" />
    </div>
 
 </v-container>
</template>

<script>
const communitycard = () => import('../components/CommunityCard')
const  popup = () => import('../components/Popup')
import { db } from '../assets/utilities/db'

  export default {
       components: {communitycard, popup},
    data: () => ({
        messages : []
    }),
    firestore: {
    messages: db.collection('messages').orderBy('createdAt'),
  },
  }
</script>