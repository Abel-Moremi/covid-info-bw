<template>
    <v-container class="my-5">
        <v-layout row>
        <v-flex xs12>
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
                      <h2 class="display-1 bold-text deep-purple--text">{{info.cases}}</h2>
                      <p class="bold-text-1">Confirmed</p>
                  </v-card>
                </v-flex>

                <v-flex xs6 md4 lg4 class="text-center">
                   <v-card class="mx-auto card-margin">
                        <v-progress-circular :class="d_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 class="display-1 bold-text deep-purple--text">{{info.deaths}}</h2>
                      <p class="bold-text-1">Deaths</p>
                  </v-card>
              </v-flex>   

              <v-flex xs6 md4 lg4 class="text-center">
                   <v-card class="mx-auto card-margin">
                        <v-progress-circular :class="d_none"
                          indeterminate
                          color="purple"
                        ></v-progress-circular>
                      <h2 class="display-1 bold-text deep-purple--text">{{info.recovered}}</h2>
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
          <h1>Local News Articles &amp; Updates.</h1>
        </v-flex>

          <v-flex xs12 class="text-center">
                <v-progress-linear :class="display"
                  indeterminate
                  color="deep-purple"
                  height="10"
                ></v-progress-linear>
          </v-flex>

        <v-flex xs12 md6 lg6 v-for="post in news" :key="post.post.id">
          <newscard
          :title="`${post.post.title.rendered}`"
          :body="`${post.post.excerpt.rendered}`"
          :read="`${post.post.id}`"/>
        </v-flex>

      </v-layout>
      <!--End Local News Articles Section -->

      <br><br>
 <!--WHO Latest Updates Section -->
      <v-layout row>
        <v-flex xs12>
          <h1>WHO Latest Articles &amp; Updates.</h1>
            <br>
        </v-flex>
        
        <v-flex xs12 md6 lg4>
    
        </v-flex>
      </v-layout>
      <!-- End WHO Latest Updates Section-->
      
    </v-container>
</template>
<script>
import newscard from '../components/NewsCard'

  export default {
    components: {newscard},
    data() {
    return {
      news: [],
      info: null,
      display: 'display',
      d_none: null
    }
  },
    methods: {
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