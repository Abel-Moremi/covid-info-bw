<template>
  <v-footer
    dark
    padless
  >
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
       Track the current status of the COVID-19 and stay up to date with the latest news and events about Novel Coronavirus and its course through Botswana. COVIDBWLIVE's purpose is to source factual and reliable information about the COVID-19 in Botswana and make it accessible to Batswana in hopes to combat fake news and prevent panic.

This website was made by individuals and not any official government or health organisation. All of our information comes from reputable sources such as the Ministry of Health and Wellness, Botswana government the CDC and live data APIs provided by the WHO. However, you are encouraged to confirm the information herein with your health care professional.

All case data presented on this site is sourced from the Ministry of Health and Wellness Botswana, Programmable web covid 19 tracker APIs and the WHO.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — &copy;<strong>COVIDBWLIVE</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
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