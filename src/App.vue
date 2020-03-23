<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    
      <v-toolbar-title>CORONA INFORMATION BOTSWANA</v-toolbar-title>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-content>
      <Map/>
    </v-content>
  </v-app>
</template>

<script>
import Map from './components/map';

export default {
  name: 'App',

  components: {
    Map,
  },

  data: () => ({
    //
  }),
};
</script>
