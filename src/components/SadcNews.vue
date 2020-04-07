<template>
    <v-container>
       
            <v-layout row>
        <v-flex xs12>
             <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-1 basil--text">SADC NEWS</h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
             <br>
        <v-layout row>
            
                <v-flex xs12 md4 lg4 class="text-center">
                   <v-card class="mx-auto card-margin" >
                        <v-progress-circular :class="d_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 v-if="infoSA != null" class="display-1 bold-text deep-purple--text">{{infoSA.confirmed.value}}</h2>
                      <p class="bold-text-1">Confirmed</p>
                  </v-card>
                </v-flex>

                <v-flex xs6 md4 lg4 class="text-center">
                   <v-card class="mx-auto card-margin">
                        <v-progress-circular :class="d_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 v-if="infoSA != null" class="display-1 bold-text deep-purple--text">{{infoSA.deaths.value}}</h2>
                      <p class="bold-text-1">Deaths</p>
                  </v-card>
              </v-flex>   

              <v-flex xs6 md4 lg4 class="text-center">
                   <v-card class="mx-auto card-margin">
                        <v-progress-circular :class="d_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 v-if="infoSA != null" class="display-1 bold-text deep-purple--text">{{infoSA.recovered.value}}</h2>
                      <p class="bold-text-1">Recovered</p>
                  </v-card>
              </v-flex>

            </v-layout>
        <v-layout row>
            <v-flex  xs12 class="mg-top" v-for="article in msanzi" :key="article.id">
                <card :title="article.title.rendered"
                      :excerpt="article.excerpt.rendered"
                      :link="article.link">
                </card>
               
            </v-flex>
        </v-layout>
      </v-tab-item>
    </v-tabs-items>

  </v-card>
        </v-flex>

    </v-layout>
    </v-container>
</template>

<script>
import card from '../components/CardSadc'
  export default {
      components: {card},
    data () {
      return {
        tab: null,
        items: [
          'South Africa' , 'Namibia', 
        ],
        text: [],
        msanzi : null,
        infoSA : null,
        d_none : null
      }
    },
    methods : {
            getSA(){
                    const request = async () => {
                    const response = await fetch('https://covid19.mathdro.id/api/countries/south%20africa');
                    const json = await response.json();
                    this.infoSA = json
                     this.d_none = 'd_none';
                }
                request();
            },
            getMsanziNews(){
                    const request = async () => {
                    const response = await fetch('https://www.sabcnews.com/sabcnews/wp-json/wp/v2/posts');
                    const json = await response.json();
                    this.msanzi = json
                }
                request();
            },
            created(){
                
                let links = ['https://www.sabcnews.com/sabcnews/wp-json/wp/v2/posts', 'http://www.caprivivision.com/wp-json/wp/v2/posts'];
               // console.log(links)
                var i =0
                for (i = 0; i < links.length; i++) {
                
                 fetch(links[i])
                    .then((res) => res.json())
                    .then((data) => {
                        let _this = this
                        let array = []
                    //  let output = '<h2 class="mb-4">Posts</h2>';
                        data.forEach(function(post){
                            array.push({
                            post
                        })

                        _this.display = 'none';
                        // this.articles.push(post)
                        });
                            _this.text.push({
                            array
                        })
                    // document.getElementById('output').innerHTML = output;
                    })
                }
     
    }
    },
    beforeMount(){
        this.created();
        this.getSA()
        this.getMsanziNews()
    }
  }
</script>

<style>
 .card-margin{
    padding-top:30px;
    padding-bottom:20px;
  }
/* Helper classes */
.basil {
  background-color: #FFF !important;
}
.basil--text {
  color: #b4b4b4 !important;
}

.d_none{
    display:none
}
</style>