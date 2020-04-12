<template>
    <div>
        <v-carousel hide-delimiters>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            >
            <v-row
                class="fill-height"
                align="center"
                justify="center"
                >
                <div :class="`${item.color}`" id="bold">{{item.text}}</div>
                </v-row>
            </v-carousel-item>

        </v-carousel>

    <v-container class="my-5">
           <v-layout row class="pad">
            <v-flex xs12>
                  <v-alert type="info">Botswana Lockdown Day: <span>{{counter}}</span></v-alert>
                <h2 class="display-1 text-center" >Botswana COVID19 Stats</h2>
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

        <div id="117171632">

      </div>

        <v-layout row>
            <v-flex xs12>
                 <h2 class="display-1 text-center">Weekly Log</h2> 
                 <p class=" grey--text text-center">For the month of March 2020</p> 
            </v-flex>
        </v-layout>
        <v-layout row>
          <timeline />
        </v-layout>  
    </v-container>
        
    </div>
</template>

<script>
import datacard from '../components/Datacard'
import timeline from '../components/Timeline'
import { db } from '../assets/utilities/db'
import bga from '../assets/corona.jpg'
import bgb from '../assets/worldmap.jpg'

  export default {
      components: {datacard, timeline},
    data () {
      return {
          props:['text'],
          counter : null,
        items: [
          {
            src: bga,
            text: '#FlattenTheCurve',
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
    
    info: db.collection('OverallStats').limit(1),
  },
    methods :{
            ad(){
     
              window._mNHandle.queue.push(function (){
                  window._mNDetails.loadTag("117171632", "970x90", "117171632");
              });
        
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
     this.ad()
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
</style>