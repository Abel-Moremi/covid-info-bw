<template>
    <div>
    <v-carousel v-if="source[0] == null"
        cycle
        height="300"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet 
            :color="colors[i]"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div  style="width:80vw"> 
                <v-container >
                 <span class="size-2"><strong v-html="slide.post.title.rendered"> {{ slide.post.title.rendered }}</strong></span> <br>
                  <v-btn :href="`news/`+`${slide.post.slug}`">read</v-btn>
                  </v-container>
                  </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-container v-if="source[0] != null">
        <v-layout row>
          <v-flex xs12>
            <h2>Live Feed</h2>
          </v-flex>
          <v-flex xs12>
                <div class="fb-video" :data-href="source[0].source" id="data-width" data-show-text="false">
                <div class="fb-xfbml-parse-ignore">
                  
                </div>
              </div>
          </v-flex>
        </v-layout>
      </v-container>
    <v-container class="my-5">
           <v-layout row class="pad">
            <v-flex xs12>
                  <v-alert type="info" class="gradient-purple">Botswana Lockdown Day: <span>{{counter}}</span></v-alert>
                <h2 class="display-1 text-center" ><strong>Botswana covid19 stats</strong></h2>
                  <p v-if="info[0] != null" class="text-center grey--text">Updated {{info[0].lastUpdated}}</p>
            </v-flex>

            <v-flex xs6 md6 lg6>
                <datacard v-if="info[0] != null" :data="`${info[0].confirmed}`" title="Confirmed"/>
            </v-flex>

            <v-flex xs6 md6 lg6>
                <datacard v-if="info[0] != null" :data="`${info[0].deaths}`" title="Deaths"/>
            </v-flex>

            <v-flex xs6 md6 lg6>
                <datacard v-if="info[0] != null" :data="`${info[0].recovered}`" title="Recovered"/>
            </v-flex>

            <v-flex xs6 md6 lg6>
                <datacard v-if="info[0] != null" :data="`${info[0].tested}`" title="Tested"/>
            </v-flex>

        </v-layout>

        <v-layout row>
            <v-flex xs12>
                 <h2 class="display-1 text-center"><strong>Weekly Log</strong></h2> 
                 <p class=" grey--text text-center">Weekly summary of recorded cases and brief profiling of the cases.</p> 
            </v-flex>
        </v-layout>
       <!--  
          <v-layout row>
          <chart />
        </v-layout> -->
        <v-layout row>
          <timeline />
        </v-layout>  
    </v-container>
        
    </div>
</template>

<script>
import datacard from '../components/Datacard'
//import chart from '../components/PieChart'
import timeline from '../components/Timeline'
import { db } from '../assets/utilities/db'
import bga from '../assets/corona.jpg'
import bgb from '../assets/worldmap.jpg'
  export default {
      components: {datacard, timeline},
    data () {
      return {
          colors: [
          'gradient-purple',
          'bg-img',
          'gradient-purple',
          'deep-purple',
          'gradient-purple',
        ],
        slides: [],
          props:['text'],
          counter : null,
          source : null,
        items: [
          {
            src: bga,
            text: null,
            color: 'white--text display-1'
          },
          {
            src: bgb,
            text: '#StayHome',
            color: 'black--text display-2'
          },
        ],
        info : null
      }
    },
  firestore: {
    source: db.collection('live').limit(1),
    info: db.collection('OverallStats').limit(1),
  },
    methods :{
      getSundayNews(){
              const request = async () => {
              const response = await fetch('https://www.sundaystandard.info/wp-json/wp/v2/posts');
              const json = await response.json();
              let _this = this
              let ct = 0
              json.forEach(function(post){
                if(ct < 5){
                    _this.slides.push({
                    post
                  })
                }
                ct++;

              });
              
              //this.items[0].text = json
          }
          request();
      },
      countDays(){
        let then = new Date(`2020, 04, 03`);
        let now  = new Date;             
        let count = Math.round((now - then) / (1000 * 60 * 60 * 24)); 
        this.counter = count;
        console.log(this.info);
      },
    },
   beforeMount(){
     this.countDays();
     this.getSundayNews()
 }
  }
</script>

<style scoped>
#bold{
    font-weight:bold;
}
.pad{
  padding-top:30px;
  padding-bottom:60px;
}

#data-width{
  width:80%;
  max-height:600px;
}
.gradient-purple{
  background-image: linear-gradient(135deg, #6200EA 0%, #764ba2 100%);
}

.size-2{
  font-size:24px
}

</style>