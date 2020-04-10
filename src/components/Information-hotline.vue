<template>
    <v-container>

        <v-col class="text-center" cols="12">
          <h1 class="display-1 mb-4">Hotlines</h1>
          <h4 class="subheading">
            list of hotlines and hospitals <br>
            designated for covid-19
          </h4>
        </v-col>

        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <v-col class="text-center" cols="12">
            <h2>Hotlines</h2>
        </v-col>
        

        <br><br>

         <v-col class="text-center" cols="12">
            <h2>Hospitals</h2>
        </v-col>
        <br>
    </v-container>
</template>

<script>
  import { db } from '../assets/utilities/db'

  export default {

 
    data () {
      return {
        faq : [],
        lockdown : [],
        items: [
        {
          text: 'Information',
          disabled: true,
        },
        {
          text: 'Hotlines',
          disabled: true,
        },
      ],   
      }
    },
    firestore: {
      faq: db.collection('Information').doc('FAQs').collection("General-Info"),
      lockdown: db.collection('Information').doc('FAQs').collection("About-Lockdown")
    },
  }
</script>

<style scoped>
   
</style>