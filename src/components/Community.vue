<template>
<v-container>
  <v-layout row>
    <v-flex xs12>
      <h2 class="text-center"><strong>Share some words of comfort with fellow Batswana.</strong></h2>
    </v-flex>
  </v-layout>
    <popup />
    
    <div v-for="message in messages"
      :key="message.id"> 
        <communitycard :place="`${message.place}`" :message="`${message.message}`" :author="`${message.name}`" />
    </div>
 
 </v-container>
</template>

<script>
import communitycard from '../components/CommunityCard'
import popup from '../components/Popup'
import { db } from '../assets/utilities/db'

  export default {
       components: {communitycard, popup},
    data: () => ({
        messages : []
    }),
    firestore: {
    messages: db.collection('messages'),
  },
  }
</script>