  
<template>
  <nav>

    <v-app-bar color="white" app style="box-shadow:none">
        <v-icon @click="drawer = !drawer" class="black--text d-flex d-md-none d-lg-none">menu</v-icon>
      <v-toolbar-title class=" white--text">
        <img src="../assets/logobw.png" alt="covibw logo" width=140 style="margin-top:8px">
      </v-toolbar-title>

        <div class="d-none d-md-flex">
              <v-btn depressed style="background-color:transparent" class="black--text" href="/">
                <v-icon left>home</v-icon>
               
              </v-btn>


              <v-btn depressed style="background-color:transparent" class=" z--text accent-4" href="/map">
                
                <span class="bold">Map View</span>
              </v-btn>

              <v-btn depressed style="background-color:transparent" class="black--text" href="/news">
                
                <span class="bold">News</span>
              </v-btn>
              <v-btn depressed style="background-color:transparent" class="black--text" href="/sadc-news">
       
        <span class="bold">SADC</span>
      </v-btn>
        </div>

      <v-spacer></v-spacer>

      <div class="d-none d-md-flex">
      <v-btn depressed style="background-color:transparent" class="black--text accent-4" href="/community">
        <v-icon left>question_answer</v-icon>
        
      </v-btn>

      
      </div>
    </v-app-bar>

    <v-navigation-drawer 
      style="z-index:9999;"
      class="deep-purple accent-4"
      dark
      app v-model="drawer"
    >
        <v-img gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="subheading display-1 white--text text-center">#StayHome</div>
            <div class="body-1 white--text text-center"><strong>#FlattenTheCurve</strong></div>
          </v-col>
        </v-row>
      </v-img>
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
           <v-btn 
            class="ma-2" 
            color="black"
            inline-block
            href="https://www.paypal.me/rudisang"
          >
            Buy us Coffee
            <v-icon right>mdi-coffee</v-icon>
          </v-btn>
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
        { icon: 'trending_up', text: 'Map View', route: '/map' },
        { icon: 'menu_book', text: 'News', route: '/news' },
        { icon: 'question_answer', text: 'Community', route: '/community' },
        { icon: 'info', text: 'Information', route: '/info' },
        { icon: 'flag', text: 'SADC Updates', route: '/sadc-news' },
        { icon: 'mdi-youtube-tv', text: 'Videos', route: '/live' },
        { icon: 'mdi-radio-tower', text: 'Local Radio(beta)', route: '/radio' },
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

.bold{
  font-weight:900 !important;
}


</style>

