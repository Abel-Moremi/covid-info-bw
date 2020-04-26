<template>
    <v-container style="height: 400px;">
      <div id="117171632"></div>
      <v-row
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col
          class="subtitle-1 text-center"
          cols="12"
        >
        <v-icon class="display-3">mdi-radio-tower</v-icon><br><br>
        <h2 class="text-center">Gabz FM</h2>
            <audio controls id="audio">
                <source src="https://onlineradiobox.com/json/bw/gabz/play?platform=web" type="audio/ogg">
                <source src="https://onlineradiobox.com/json/bw/gabz/play?platform=web" type="audio/wav">
                 <source :src="gabz" type="audio/mpeg">
                Your browser does not support the audio format.
            </audio>
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
  export default {
    data () {
      return {
            switchFM : true,
            yarona: 'https://onlineradiobox.com/json/bw/yarona/play?platform=web',
            gabz : 'https://onlineradiobox.com/json/bw/gabz/play?platform=web'
      }
    },
    methods : {
      animation(){
          var audioEl = document.getElementById('audio')
          if(audioEl.paused){
            console.log("playing")
          }
      }
    },
    mounted(){
        this.animation()
    }
  }
</script>