<template>
    <div>
      <div v-if="loading">
        <h1>Loading...</h1>
      </div>

      <div v-else>
<v-carousel style="border-radius:20px" v-if="source[0] == null"
        cycle
        height="600"
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet 
            :style="`background:grey;background:url(`+`${slide.post.image}`+`);padding:20px !important; border-radius:20px !important;background-size:cover;background-position:center;background-repeat:no-repeat;`"
            height="100%"
          >
            <v-row 
            style="height:100% !important;"
              
              align="end"
              justify="start"
            >
              <div :style="`width:100vw;padding:20px;`"> 
                <v-container style="margin-left:0px">
                  <span class="size-1">{{ new Date(slide.post.date).toDateString()}}</span>
                  <br>
                 <p></p>
                 <span class="size-2"><strong v-html="slide.post.title.rendered"> {{ slide.post.title.rendered }}</strong></span>
                  <br> <p></p>
                  <v-btn style="" :href="`news/`+`${slide.post.slug}`">read</v-btn>
                  
                  </v-container>
                  </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      </div>

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

            <v-flex xs6 md6 lg5 offset-lg-1 style="margin-top:10px">
                <datacard v-if="info[0] != null" :data="`${info[0].confirmed}`" title="Confirmed"/>
            </v-flex>

            <v-flex xs6 md6 lg5 offset-lg-1 style="margin-top:10px">
                <datacard v-if="info[0] != null" :data="`${info[0].deaths}`" title="Deaths"/>
            </v-flex>

            <v-flex xs6 md6 lg5 offset-lg-1 style="margin-top:10px">
                <datacard v-if="info[0] != null" :data="`${info[0].recovered}`" title="Recovered"/>
            </v-flex>

            <v-flex xs6 md6 lg5 offset-lg-1 style="margin-top:10px">
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
const datacard = () => import('../components/Datacard')
const  timeline = () => import('../components/Timeline')
//import chart from '../components/PieChart'
import { db } from '../assets/utilities/db'
import bga from '../assets/corona.jpg'
import bgb from '../assets/worldmap.jpg'
import bg from '../assets/bg.png'
  export default {
      components: {datacard, timeline},
    data () {
      return {
        bg,
        loading: true,
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
        async function getStuf(link, post){
           try {
        const response = await fetch(link);
          if(!response.ok){
              throw Error('no data')
          }

          let img = await response.json()
          post.image = img.guid.rendered
         
    } catch (er) {
        post.image = '/assets/city.jpg'
        console.log(er)
    }
        }
              const request = async () => {
              const response = await fetch('https://www.sundaystandard.info/wp-json/wp/v2/posts');
              const json = await response.json();
              let _this = this
              let ct = 0
              json.forEach(function(post){
                const link = 'https://www.sundaystandard.info/wp-json/wp/v2/media/'+post.featured_media
                getStuf(link, post)
                
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
     this.loading = false;
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
  font-size:34px;
  color:white;
  font-weight: 900;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.459);
}

.size-1{
    background-image: linear-gradient(135deg, #6200EA 0%, #764ba2 100%);
padding:12px;
  font-size:13px;
  color:white;
  font-weight: 900;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.459);
  border-radius:20px;
}

</style>