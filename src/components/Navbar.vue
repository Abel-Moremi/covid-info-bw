  
<template>
  <nav>

    <v-toolbar app>
      <v-icon @click="drawer = !drawer" class="black--text d-flex d-md-none d-lg-none">menu</v-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Covidbw</span>
        <span>Live</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="d-none d-md-flex">
            <v-btn depressed class="white deep-purple--text" href="/">
        <v-icon left>home</v-icon>
        <span>Home</span>
      </v-btn>

      <v-btn depressed class="white deep-purple--text accent-4" href="/map">
        <v-icon left>trending_up</v-icon>
        <span>Live Updates</span>
      </v-btn>

      <v-btn depressed class="white deep-purple--text" href="/news">
        <v-icon left>menu_book</v-icon>
        <span>News</span>
      </v-btn>
      </div>
    </v-toolbar>

    <v-navigation-drawer
      class="deep-purple accent-4"
      dark
      app v-model="drawer"
    >
      <v-list>
        <v-list-item>
          <v-list-item-icon @click="drawer = !drawer" >
            <v-icon>arrow_back</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item
          :href="item.route"
          v-for="item in links"
          :key="item.text"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

   

  </nav>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'home', text: 'Home', route: '/' },
        { icon: 'trending_up', text: 'Live Update', route: '/map' },
        { icon: 'menu_book', text: 'News', route: '/news' },
      ]
    }
  }
}
</script>

<style>
.button:hover{
  background: purple;
}
</style>

