<template>
    <v-container>

     <v-parallax
      dark
      height="300"
      :src="cbd"
      >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-1 mb-4">INFORMATION</h1>
          <h4 class="subheading">FAQs, Covid-19 hotlines and more</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <br>

    <v-card
      class="mx-auto"
    >
      <v-card-text>
        <div>Stay informed</div>
        <p class="display-1 text--primary">
          FAQs
        </p>
        <p></p>
        <div class="text--primary">
         list of frequently asked questions (FAQs)<br>
         and answers
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          view FAQs
        </v-btn>
      </v-card-actions>
    </v-card>
    <br>
     <v-card
      class="mx-auto"
    >
      <v-card-text>
        <div>Stay informed</div>
        <p class="display-1 text--primary">
          Covid-19 Contacts
        </p>
        <p></p>
        <div class="text--primary">
         list of Botswana Covid-19<br>
         hotlines
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          view contacts
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-container>
</template>

<script>
    import cbd from '../assets/cbd.jpg'
  export default {
 
    data () {
      return {
          cbd
      }
    },
  }
</script>

<style scoped>
    
</style>