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
     <v-row
            align="stretch"
            justify="center"
        >
        <v-card
          class="ma-3 pa-6"
          max-width="344"
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
              v-on:click="click_faq()"
            >
              view FAQs
            </v-btn>
          </v-card-actions>
        </v-card>
        <br>
        <v-card
          class="ma-3 pa-6"
          max-width="344"
        >
          <v-card-text>
            <div>Know Contacts</div>
            <p class="display-1 text--primary">
              Hotlines
            </p>
            <p></p>
            <div class="text--primary">
            list of Botswana Covid-19<br>
            hotlines and designated Hospitals/Centers
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="deep-purple accent-4"
              v-on:click="click_hotline()"
            >
              view hotlines
            </v-btn>
          </v-card-actions>
        </v-card>
        <br>
        <v-card
          class="ma-3 pa-6"
          max-width="344"
        >
          <v-card-text>
            <div>Help Botswana</div>
            <p class="display-1 text--primary">
              Covid-19 Relief Fund
            </p>
            <p></p>
            <div class="text--primary">
            list of Botswana Covid-19<br>
            Covid-19 relief fund accounts
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="deep-purple accent-4"
              v-on:click="click_fund()"
            >
              view Fund
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>

    </v-container>
</template>

<script>
  import cbd from '../assets/cbd.jpg'
  export default {
 
    data () {
      return {
          cbd,
      }
    },
    methods: {
      click_faq(){
        this.$emit('faqClicked');
      },
      click_hotline(){
        this.$emit('hotlineClicked');
      },
        click_fund(){
        this.$emit('fundClicked');
      },
    }
  }
</script>

<style scoped>
    
</style>