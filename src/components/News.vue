<template>
  <div>
      <v-parallax
      dark
      height="300"
      :src="cbd"
      >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-1 mb-4">BW NEWS</h1>
          <h4 class="subheading">Local headlines, breaking news, announcements and stories!</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container class="my-5">
        <v-layout row>
        <v-flex xs12 class="text-center">
          <h1>World Stats</h1>
          <p>Updated Daily</p>
            <br>
        </v-flex>

        <v-flex xs12>
            <v-layout row>

                <v-flex xs12 md4 lg4 class="text-center">
                   <v-card class="mx-auto card-margin" >
                        <v-progress-circular :class="d_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 v-if="info != null" class="display-1 bold-text deep-purple--text">{{info.cases}}</h2>
                      <p class="bold-text-1">Confirmed</p>
                  </v-card>
                </v-flex>

                <v-flex xs6 md4 lg4 class="text-center">
                   <v-card class="mx-auto card-margin">
                        <v-progress-circular :class="d_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 v-if="info != null" class="display-1 bold-text deep-purple--text">{{info.deaths}}</h2>
                      <p class="bold-text-1">Deaths</p>
                  </v-card>
              </v-flex>   

              <v-flex xs6 md4 lg4 class="text-center">
                   <v-card class="mx-auto card-margin">
                        <v-progress-circular :class="d_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 v-if="info != null" class="display-1 bold-text deep-purple--text">{{info.recovered}}</h2>
                      <p class="bold-text-1">Recovered</p>
                  </v-card>
              </v-flex>

            </v-layout>
        </v-flex>

      </v-layout>

      <br><br>

      <!--Local News Articles Section -->
      <v-layout row>
        <v-flex xs12>
          <h1 class="text-center">Local News Articles &amp; Updates.</h1>
          <p class="text-center grey--text">Latest news articles and stories sources from local news media.</p>
          <br>
              <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item >
         <v-layout row> 
          
          <v-flex v-if="sunday == null" xs12 class="text-center">
                <v-layout :class="display" v-for="i in 3" :key="i" row>
                  <v-flex xs12>
                    <br>
                    <v-card class="mx-auto" max-width="800">
                      <vcl-facebook  :speed=1></vcl-facebook>
                    </v-card>
                    
                  </v-flex>
                </v-layout>
            </v-flex>

          <v-flex xs12 v-for="s in sunday" :key="s.id">
            <newscard
            :title="`${s.title.rendered}`" 
            :body="`${s.excerpt.rendered}`"
            :read="`${s.slug}`"
            :date="`${s.date.slice(0, 10)}`"/>
          </v-flex>
        </v-layout>
      </v-tab-item>


      <v-tab-item >
  <!--Your Botswana -->
      <v-layout row>
          <v-flex xs12 class="text-center">
               <v-layout :class="display" v-for="i in 3" :key="i.id" row>
                <v-flex xs12>
                  <br>
                  <v-card class="mx-auto" max-width="800">
                    <vcl-facebook  :speed=1></vcl-facebook>
                  </v-card>
                  
                </v-flex>
              </v-layout>

          </v-flex>
        
        <v-flex xs12 v-for="post in news" :key="post.post.id">
          <newscard
          :title="`${post.post.title.rendered}`"
          :body="`${post.post.excerpt.rendered}`"
          :read="`${post.post.slug}`"
          :date="`${post.post.date.slice(0, 10)}`"/>
        </v-flex>
      </v-layout>
      <!-- End Your botswana-->
      </v-tab-item>

    </v-tabs-items>
  </v-flex>
</v-layout>


      
    </v-container>
  </div>
</template>
<script>
import newscard from '../components/NewsCard'
import { VclFacebook} from 'vue-content-loading';
import cbd from '../assets/cbd.jpg'

  export default {
    components: {newscard,VclFacebook},
    data() {
    return {
      tab : null,
      items: [
          'Sunday Standard', 'Your Botswana',
        ],
      news: [],
      info: null,
      display: 'display',
      d_none: null,
      cbd,
      sunday:null
    }
  },
    methods: {
      getSundayNews(){
              const request = async () => {
              const response = await fetch('https://www.sundaystandard.info/wp-json/wp/v2/posts');
              const json = await response.json();
              this.sunday = json
          }
          request();
      },
      created(){
      fetch('https://yourbotswana.com/wp-json/wp/v2/posts')
      .then((res) => res.json())
      .then((data) => {
        let _this = this

      //  let output = '<h2 class="mb-4">Posts</h2>';
        data.forEach(function(post){
           _this.news.push({
            post
          })

          _this.display = 'none';
          // this.articles.push(post)
        });
       // document.getElementById('output').innerHTML = output;
      })
    },
      getData(){
      fetch('https://corona.lmao.ninja/all')
      .then((res) => res.json())
      .then((data) => {
        let _this = this
              _this.info = data
              _this.d_none = 'd_none';
          })
    }
    },
    beforeMount(){
    this.created();
    this.getData();
    this.getSundayNews();
 }
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  .card-margin{
    padding-top:30px;
    padding-bottom:20px;
  }
  .bold-text{
    font-family: 'Anton', sans-serif;
    font-weight:bold;
  }

    .bold-text-1{
    font-family: 'Anton', sans-serif;
    font-weight:5;
  }

  .display{
    display:block;
  }

  .none{
    display:none;
  }
  .d_none{
    display:none
  }
</style>