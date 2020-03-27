<template>
  <v-app>
    <v-app-bar
      app
  
     light
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://pngimage.net/wp-content/uploads/2018/06/logo-info-png-9.png"
          transition="scale-transition"
          width="40"
        />

        <v-text>CovidInfo BW</v-text>
      </div>

     <v-btn href="/" text class="shrink mt-1 hidden-sm-and-down">
        <v-icon>home</v-icon><span class="mr-2">Home</span>
       </v-btn>

      <v-btn href="/map" text class="shrink mt-1 hidden-sm-and-down">
       <v-icon>show_chart</v-icon> <span class="mr-2">Stats</span>
       </v-btn>

      <v-btn href="/news" text class="shrink mt-1 hidden-sm-and-down">
       <v-icon>menu_book</v-icon> <span class="mr-2">News</span>
       </v-btn>
      <v-spacer></v-spacer>

    
      <v-btn href="/news" text class="shrink mt-1 hidden-sm-and-down">
       <v-icon>group</v-icon> <span class="mr-2">Community</span>
       </v-btn>

    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
