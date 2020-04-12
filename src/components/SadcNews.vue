<template>
<div>
    <v-parallax
    dark
    height="300"
    src="https://images.wallpaperscraft.com/image/stains_purple_gradient_127189_2048x1152.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 mb-4">SADC NEWS</h1>
        <h4 class="subheading">Keep up with what is happening in our neighbouring countries!</h4>
      </v-col>
    </v-row>
  </v-parallax>
    <v-container>
  
            <v-layout row>
        <v-flex xs12>
             <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      
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

<!--START SOUTH AFRICA TAB SECTION-->
<!--#################################################################################################################################-->
    <v-tabs-items v-model="tab">
      <v-tab-item>
             <br>

<!-- start SA Latest Cases Cards-->
        <v-layout row>
          <div id="117171632">
            <script type="text/javascript">
                try {
                    window._mNHandle.queue.push(function (){
                        window._mNDetails.loadTag("117171632", "970x90", "117171632");
                    });
                }
                catch (error) {}
            </script>
        </div>
                <v-flex xs12>
                    <h3 v-if="infoSA != null" class="text-center grey--text">last updated: {{infoSA.lastUpdate.slice(0, 10)}}</h3>
                </v-flex>
                  
                <v-flex xs12 md4 lg4 class="text-center">
                   <v-card flat class="mx-auto card-margin" >
                        <v-progress-circular :class="d_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 v-if="infoSA != null" class="display-1 bold-text deep-purple--text"><strong>{{infoSA.confirmed.value}}</strong></h2>
                      <p class="bold-text-1">Confirmed</p>
                  </v-card>
                </v-flex>

                <v-flex xs6 md4 lg4 class="text-center">
                   <v-card flat class="mx-auto card-margin">
                        <v-progress-circular :class="d_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 v-if="infoSA != null" class="display-1 bold-text deep-purple--text"><strong>{{infoSA.deaths.value}}</strong></h2>
                      <p class="bold-text-1">Deaths</p>
                  </v-card>
              </v-flex>   

              <v-flex xs6 md4 lg4 class="text-center">
                   <v-card flat class="mx-auto card-margin">
                        <v-progress-circular :class="d_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 v-if="infoSA != null" class="display-1 bold-text deep-purple--text"><strong>{{infoSA.recovered.value}}</strong></h2>
                      <p class="bold-text-1">Recovered</p>
                  </v-card>
              </v-flex>

            </v-layout>
            <!-- end SA Latest Cases Cards-->

<!-- SA Articles -->
        <v-layout row>
            <v-container>
              <br>
              <v-layout row>
                <v-flex xs12>
                    <h2 class="text-center">Latest Headlines</h2>
                    <p class="text-center">Source: SABC News</p>
                </v-flex>
              </v-layout>
              <v-layout v-for="i in 3" :key="i.id" row>
                <v-flex xs12 v-if="msanzi == null">
                  <br>
                  <v-card>
                    <vcl-facebook :speed=1></vcl-facebook>
                  </v-card>
                  
                </v-flex>
              </v-layout>
            </v-container>
            <v-flex  xs12  class="mg-top" v-for="article in msanzi" :key="article.id">
                <card :title="article.title.rendered"
                      :excerpt="article.excerpt.rendered"
                      :link="article.link"
                      :image="`${saImg}`">
                </card>
               
            </v-flex>
        </v-layout>
        <!--end SA Articles -->

      </v-tab-item>
          <!--END SOUTH AFRICA TAB SECTION-->
<!--###############################################################################################-->

<!--########################################################################################################-->
<!--START Nambia TAB SECTION-->
      <v-tab-item>
             <br>

<!-- start Namibia Latest Cases Cards-->
        <v-layout row>
                <v-flex xs12>
                    <h3 v-if="infoNam != null" class="text-center grey--text">last updated: {{infoNam.lastUpdate.slice(0, 10)}}</h3>
                </v-flex>
                  
                <v-flex xs12 md4 lg4 class="text-center">
                   <v-card shaped class="mx-auto card-margin" >
                        <v-progress-circular :class="nam_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 v-if="infoNam != null" class="display-1 bold-text deep-purple--text"><strong>{{infoNam.confirmed.value}}</strong></h2>
                      <p class="bold-text-1">Confirmed</p>
                  </v-card>
                </v-flex>

                <v-flex xs6 md4 lg4 class="text-center">
                   <v-card shaped class="mx-auto card-margin">
                        <v-progress-circular :class="nam_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 v-if="infoNam != null" class="display-1 bold-text deep-purple--text"><strong>{{infoNam.deaths.value}}</strong></h2>
                      <p class="bold-text-1">Deaths</p>
                  </v-card>
              </v-flex>   

              <v-flex xs6 md4 lg4 class="text-center">
                   <v-card shaped class="mx-auto card-margin">
                        <v-progress-circular :class="nam_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 v-if="infoNam != null" class="display-1 bold-text deep-purple--text"><strong>{{infoNam.recovered.value}}</strong></h2>
                      <p class="bold-text-1">Recovered</p>
                  </v-card>
              </v-flex>

            </v-layout>
            <!-- end Namibia Latest Cases Cards-->

<!-- Namibia Articles -->
        <v-layout row>
          <div id="117171632">
            <script type="text/javascript">
                try {
                    window._mNHandle.queue.push(function (){
                        window._mNDetails.loadTag("117171632", "970x90", "117171632");
                    });
                }
                catch (error) {}
            </script>
        </div>
            <v-container>
              <br>
              <v-layout row>
                <v-flex xs12>
                    <h2 class="text-center">Latest Headlines</h2>
                    <p class="text-center">Source: Namibia Economist</p>
                </v-flex>
              </v-layout>
              <v-layout v-for="i in 3" :key="i.id" row>
                <v-flex xs12 v-if="namib == null">
                  <br>
                  <v-card>
                    <vcl-facebook :speed=1></vcl-facebook>
                  </v-card>
                  
                </v-flex>
              </v-layout>
            </v-container>
            <v-flex  xs12 class="mg-top" v-for="article in namib" :key="article.id">
                <card :title="article.title.rendered"
                      :excerpt="article.excerpt.rendered"
                      :link="article.link"
                      :image="`${namImg}`">
                </card>
               
            </v-flex>
        </v-layout>
        <!--end Namibia Articles -->
        
      </v-tab-item>
    <!--END Namibia TAB SECTION-->
    </v-tabs-items>

   </v-card>
  </v-flex>

    </v-layout>
    </v-container>
</div>
</template>

<script>
import card from '../components/CardSadc'
import { VclFacebook} from 'vue-content-loading';
import namImg from '../assets/namibFlag.png'
import saImg from '../assets/saFlag.jpg'
  export default {
      components: {card,VclFacebook},
    data () {
      return {
        tab: null,
        items: [
          'South Africa' , 'Namibia',
        ],
        text: [],
        msanzi : null,
        infoSA : null,
        infoNam : null,
        namib : null,
        namImg ,
        saImg ,
        nam_none : null,
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
                    //console.log(json)
                }
                request();
            },
            getNam(){
                    const nrequest = async () => {
                    const response = await fetch('https://covid19.mathdro.id/api/countries/namibia');
                    const json = await response.json();
                    this.infoNam = json
                    this.nam_none = 'nam_none';
                    //console.log(json)
                }
                nrequest();
            },
            getMsanziNews(){
                    const request = async () => {
                    const response = await fetch('https://www.sabcnews.com/sabcnews/wp-json/wp/v2/posts');
                    const json = await response.json();
                    this.msanzi = json
                }
                request();
            },
            getNamNews(){
                    const request = async () => {
                    const response = await fetch('https://economist.com.na/wp-json/wp/v2/posts');
                    const json = await response.json();
                    this.namib = json
                }
                request();
            },
    },
    beforeMount(){
        this.getSA()
        this.getNam()
        this.getMsanziNews()
        this.getNamNews()
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

.nam_none{
    display:none
}
.d_none{
    display:none
}
</style>