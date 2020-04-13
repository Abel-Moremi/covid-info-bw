<template>
  <v-footer
    dark
    padless
  >
   <v-bottom-navigation class="deep-purple accent-4 d-none d-md-flex"
    v-model="bottomNav"
  >
  <v-btn href="/info" value="information">
      <span>Information</span>
      <v-icon>mdi-head-question</v-icon>
    </v-btn>

    <v-btn href="/live" value="live-stream">
      <span>Live Stream(beta)</span>
      <v-icon>mdi-youtube-tv</v-icon>
    </v-btn>

      <v-btn href="/radio" value="radio">
      <span>Local Radio(Alpha)</span>
      <v-icon>mdi-radio-fm</v-icon>
    </v-btn>
  </v-bottom-navigation> 
    <v-card
      flat
      tile
      class="deep-purple accent-4 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
COVID-BW-INFO's purpose is to source factual and reliable information about COVID-19 in Botswana and make it accessible to Batswana in hopes to combat fake news and prevent panic.

This website was made by individuals and not any official government or health organisation. All of our information comes from reputable sources such as the Ministry of Health and Wellness Botswana, Botswana Government official social media pages, the Centers for Disease Control and Prevention(USA), The World Health organization, Local newspapers(Sunday Standard, The patriot on Sunday, Mmegi), Local Blogs(Your Botswana) and international media(SABC news, The namibian economist). However, you are encouraged to confirm the information herein with your health care professionals and the sources themselves.

All sources are attributed and have hot links to their respective websites.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — &copy;<strong>COVID-19 INFORMATION BOTSWANA</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
        bottomNav: 'recent',
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style >
    .bg-color{
        background-image: linear-gradient(135deg, #6200EA 0%, #764ba2 100%);
    }
</style>