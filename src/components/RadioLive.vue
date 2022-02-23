<template>
    <v-container style="height: 100vh;">
      <div id="117171632"></div>
      <v-row
        class="fill-height"
        justify="center"
      >
        <v-col
          class="subtitle-1 text-center"
          cols="12"
        >
<v-carousel style="border-radius:20px" v-model="model" hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover>
    <v-carousel-item 
      v-for="station in stations" :key="station.id"
    >
      <v-sheet style="border-radius:20px !important"
        color="deep-purple"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          
          justify="center"
        >

          <div >
             <v-card style="width:600px;height:200px; display:flex:justify-content:center;align-items:center;border-radius:20px;"
            color="white"
            dark
            elevation="3"
          >
              <img style="max-width:300px;margin-top:50px" :src="station.image"/>
            
          </v-card>

            <h2></h2>
         
                <img v-if="station.playing" style="max-width:400px" :src="`${wave}`"/>
                <br v-if="!station.playing">
   <v-btn color="grey darken-4" class="radio-btn" @click="togglePlay(station.id)" :disabled="(isLoading)? true : false " style="display:block;width:30%;margin:auto">
              
              <v-progress-circular v-if="isLoading"
                indeterminate
                color="deep-purple"
              ></v-progress-circular>
              <v-icon color="deep-purple" v-if="station.playing" >mdi-pause</v-icon>
              <v-icon color="deep-purple" v-else >mdi-play</v-icon>
            </v-btn>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

        </v-col>
 
        <v-col
          class="subtitle-1 text-center"
          cols="12"
        >
        <v-btn href="/live" class="deep-purple white--text">Recent Videos</v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
 
 import wave from '../assets/wave2.gif';
import gabzfm from '../assets/gabzfm.png';
import yarona from '../assets/yaronafm.png';
import duma from '../assets/dumafm.png';
import {Howl} from 'howler';
  export default {
    
    data () {
      return {
        wave,
        gabzfm,
        yarona,
        duma,
        model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
        sound : null, 
        currentTrack : null,
        isLoading : false,
        isPlaying : false,
        stations : [
          {id : 0, title: "Gabz FM", image : gabzfm, stream: "https://onlineradiobox.com/json/bw/gabz/play?platform=web", description: "Power to Engage your World The most preferred contemporary adult radio station in Botswana", playing: false, loaded:false},
          {id : 1, title: "Yarona FM", image : yarona, stream: "https://onlineradiobox.com/json/bw/yarona/play?platform=web", description: "Yarona FM is a national broadcaster based in Gaborone, Botswana. The Station’s core audience comprises of young, upwardly mobile youth within the 20-29 age bracket with spillage on either side of this age group.", playing: false, loaded:false},
          {id : 2, title: "Duma FM", image : duma, stream: "http://s3.voscast.com:10076/;", description: "Duma FM is a family radio station whose primary objective is to INFORM, EDUCATE AND EDUCATE! This allows us to bring together people from all walks of life through conversation and music.", playing: false, loaded:false}
        ],
            switchFM : true,

            gabz : 'https://onlineradiobox.com/json/bw/gabz/play?platform=web'
      }
    },
    methods : {
      animation(){
          var audioEl = document.getElementById('audio')
          if(audioEl.paused){
            console.log("playing")
          }
      },
      streamStation(id){
          let _this = this
          this.isLoading = true
          this.stations.forEach(station => {
            station.playing = false
            station.loaded = false
          });
          this.sound = new Howl({
          src: [this.stations[id].stream],
          html5: true,
          onload: function() {
            
            _this.isLoading = false
            _this.stations[id].loaded = true
            console.log('Loaded Track');
            _this.isPlaying = true
          },
          onplay: function() {
            _this.stations[id].playing = true
            _this.currentTrack = _this.stations[id]
            
          },
          onpause: function() {
            console.log('')
          },
          onend: function(){
            _this.isPlaying = false
          }
        });

        _this.sound.play();
      },
      pauseStream(id){
        this.stations[id].playing = false
        //isPlaying.value = false
        this.sound.pause()
      },
      togglePlay(id){

        if(this.stations[id].playing){
            this.pauseStream(id)
        }else{

          if(this.sound == null){
            console.log('hit block 1')
            this.streamStation(id)
          }else{

            console.log('hit block 2 which means i am not null')
            
                if(this.stations[id].loaded){
                  console.log('hit block 2A')
                  this.sound.play()
                }else{
                  console.log('opening new stream')
                  this.sound.unload()
                  this.streamStation(id)
                }
            

          }
          
        }
      },
      test(){
        alert("it works")
      }
    },
    mounted(){
        this.animation()
    }
  }
</script>

<style scoped>
.bg-gradient{
  background-image: linear-gradient(135deg, #6200EA 0%, #764ba2 100%);
}
</style>