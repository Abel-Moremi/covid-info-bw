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
                <div class="display-3" id="bold">{{item.text}}</div>
                </v-row>
            </v-carousel-item>

        </v-carousel>

    <v-container class="my-5">
        <v-layout row>
            <v-flex xs12>
                 <h2 class="display-1 text-center">Weekly Log</h2> 
                 <p class=" grey--text text-center">For the month of March 2020</p> 
            </v-flex>
        </v-layout>
        <v-layout row>
          <timeline />
        </v-layout>

        <v-layout row>
            <v-flex xs12>
                <h2 class="display-2 text-center" >Daily Statistics</h2>
                  <p class="text-center grey--text"> Last updated 12hrs ago</p>
            </v-flex>

            <v-flex xs12 md6 lg6>
                <datacard data="0" title="Deaths"/>
            </v-flex>

            <v-flex xs12 md6 lg6>
                <datacard data="0" title="Recovered"/>
            </v-flex>

            <v-flex xs12 md6 lg3>
                <datacard data="1753" title="Quarantined"/>
            </v-flex>

            <v-flex xs12 md6 lg3>
                <datacard data="259" title="Suspected"/>
            </v-flex>

            <v-flex xs12 md6 lg3>
                <datacard data="90" title="Neg Test"/>
            </v-flex>

            <v-flex xs12 md6 lg3>
                <datacard data="0" title="Confirmed"/>
            </v-flex>

        </v-layout>

     
    </v-container>
        
    </div>
</template>

<script>
import datacard from '../components/Datacard'
import timeline from '../components/Timeline'
  export default {
      components: {datacard, timeline},
    data () {
      return {
          props:['text'],
        items: [
          {
            src: 'https://wallpaperboat.com/wp-content/uploads/2019/08/worldmap.jpg',
            text: '#FlattenTheCurve',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            text: '#StayHome',
          },
        ],
      }
    },
  }
</script>

<style scoped>
#bold{
    font-weight:bold;
}
</style>