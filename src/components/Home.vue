<template>
    <div>
        <v-carousel hide-delimiters>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            ><h1 class="text-center mgtop display-3"><strong>{{item.tag}}</strong></h1>
            </v-carousel-item>
        </v-carousel>
  <v-spacer></v-spacer>
         
    <v-row>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
          class="grey lighten-5"
          style="height: 300px;"
        >
           <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Word of the Day</div>
      <p class="display-1 text--primary">
        be•nev•o•lent
      </p>
      <p>adjective</p>
      <div class="text--primary">
        well meaning and kindly.<br>
        "a benevolent smile"
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-row>
      </v-col>
 
    </v-row>

    </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://pantheragroup.com/wp-content/uploads/2016/06/material-design-background-e1505759203405.jpg',
            tag: '#Flattent The Curve.',
          },
          {
            src: 'https://images.hdqwalls.com/download/material-design-blue-and-white-to-1920x1080.jpg',
            tag: '#Stay Home.',
          },

        ],
         alignmentsAvailable: [
          'start',
          'center',
          'end',
          'baseline',
          'stretch',
        ],
        alignment: 'center',
        dense: false,
        justifyAvailable: [
          'start',
          'center',
          'end',
          'space-around',
          'space-between',
        ],
        justify: 'center',
      }
    },
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Anton|Bebas+Neue|Kanit&display=swap');
.mgtop{
    margin-top:35vh; 
    
font-family: 'Kanit', sans-serif !important;

}
</style>