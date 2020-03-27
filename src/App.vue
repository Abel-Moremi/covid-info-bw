<template>
  <v-app>
    <v-app-bar
      app
      class="white"
     light
    >
      <div class="d-flex align-center">
        <v-img
          alt="App Logo"
          class="shrink mr-2"
          contain
          src="https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5029-512.png"
          transition="scale-transition"
          width="40"
        />

        <v-text>CovidInfo BW</v-text>
      </div>

     <v-btn href="/" text class="shrink mt-1 hidden-sm-and-down">
        <v-icon>home</v-icon><span class="mr-2">Home</span>
       </v-btn>

      <v-btn href="/map" text class="shrink mt-1 hidden-sm-and-down">
       <v-icon>show_chart</v-icon> <span class="mr-2">Live Updates</span>
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
      <v-container fluid><router-view></router-view></v-container>
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
