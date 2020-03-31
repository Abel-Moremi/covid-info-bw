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

                <v-flex xs4 class="text-center">
                   <v-card class="mx-auto card-margin" shaped>
                      <h2 class="display-1 bold-text">{{info.cases}}</h2>
                      <p>Confirmed</p>
                  </v-card>
                </v-flex>

                <v-flex xs4 class="text-center">
                   <v-card class="mx-auto card-margin" shaped>
                      <h2 class="display-1 bold-text">{{info.deaths}}</h2>
                      <p>Deaths</p>
                  </v-card>
              </v-flex>   

              <v-flex xs4 class="text-center">
                   <v-card class="mx-auto card-margin" shaped>
                      <h2 class="display-1 bold-text">{{info.recovered}}</h2>
                      <p>Recovered</p>
                  </v-card>
              </v-flex>

            </v-layout>
        </v-flex>

      </v-layout>

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

      <br><br>

      <!--Local News Articles Section -->
      <v-layout row>
        <v-flex xs12>
          <h1>Local News Articles &amp; Updates.</h1>
        </v-flex>
        
        <v-flex xs12 md6 lg6 v-for="post in news" :key="post.post.id">
          <newscard
          :title="`${post.post.title.rendered}`"
          :body="`${post.post.excerpt.rendered}`"
          :read="`${post.post.id}`"/>
        </v-flex>

      </v-layout>
      <!--End Local News Articles Section -->
      
    </v-container>
</template>
<script>
import newscard from '../components/NewsCard'

  export default {
    components: {newscard},
    data() {
    return {
      news: [],
      info: null
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
</style>