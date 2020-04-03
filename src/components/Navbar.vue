  
<template>
  <nav>

    <v-app-bar color="nav-color" app>
        <v-icon @click="drawer = !drawer" class="white--text d-flex d-md-none d-lg-none">menu</v-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">Covidbw</span>
        <span>Live</span><small>(beta)</small>
      </v-toolbar-title>

        <div class="d-none d-md-flex">
              <v-btn depressed style="background-color:transparent" class="white--text" href="/">
                <v-icon left>home</v-icon>
                <span>Home</span>
              </v-btn>


              <v-btn depressed style="background-color:transparent" class=" white--text accent-4" href="/map">
                <v-icon left>trending_up</v-icon>
                <span>Live Updates</span>
              </v-btn>

              <v-btn depressed style="background-color:transparent" class="white--text" href="/news">
                <v-icon left>menu_book</v-icon>
                <span>News</span>
              </v-btn>
        </div>

      <v-spacer></v-spacer>

      <div class="d-none d-md-flex">
      <v-btn depressed style="background-color:transparent" class="white--text accent-4" href="/community">
        <v-icon left>question_answer</v-icon>
        <span>Community</span>
      </v-btn>

      <v-btn depressed style="background-color:transparent" class="white--text" href="/faqs">
        <v-icon left>info</v-icon>
        <span>FAQs</span>
      </v-btn>
      </div>
    </v-app-bar>

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
          <v-btn block>Donate</v-btn>
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
        { icon: 'trending_up', text: 'Live Updates', route: '/map' },
        { icon: 'menu_book', text: 'News', route: '/news' },
        { icon: 'question_answer', text: 'Community', route: '/community' },
        { icon: 'info', text: 'FAQs', route: '/faqs' },
      ]
    }
  }
}
</script>

<style>
.button:hover{
  background: purple;
}

.nav-color{
  background-image: linear-gradient(135deg, #6200EA 0%, #764ba2 100%);
}



</style>

