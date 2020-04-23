<template>
    <v-container >
         <v-carousel 
        cycle
        height="300"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item>
          <v-sheet 
          color="deep-purple"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div  style="width:80vw"> 
                <v-container >
                 <span class="size-2"><strong ><h2 class="text-center">Recent Videos</h2></strong></span> <br>
                  
                  </v-container>
                  </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel><br>

        <v-layout row>

          <v-flex xs12 md4 class="" v-for="video in source.slice().reverse()" :key="video.id">
              <v-progress-linear class="text-center"
                          indeterminate
                          color="purple"
                          v-if="source == null"
              ></v-progress-linear>
            <v-card class="mt-2">
              <v-card-text>
                  <iframe 
                :src="`https://www.facebook.com/plugins/video.php?href=`+video.url+`&show_text=0&width=560`"
                 height=240
                style="border:none; width:100%" 
                scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"
              ></iframe>
              <h2>{{video.title}}</h2>
              <p>{{video.date}}</p> 
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { db } from '../assets/utilities/db'
  export default {
    data () {
      return {
        source : null,
        vid : 'https://www.facebook.com/148228411926492/videos/2368668446758204'
      }
    },
    methods : {

    },
    firestore: {
      source: db.collection('VideoUrls').orderBy('id')
    },
  }
</script>