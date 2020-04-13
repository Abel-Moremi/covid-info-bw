<template>
    <v-container class="my-5">
      <!--WHO Latest Updates Section -->
      <v-layout row>
        <v-flex xs12 v-if="article == null && sunday == null">
          <v-container style="height: 400px;">
            <v-row
              class="fill-height"
              align-content="center"
              justify="center"
            >
              <v-col
                class="subtitle-1 text-center"
                cols="12"
              >
                Loading Article
              </v-col>
              <v-col cols="6">
                <v-progress-linear
                  color="deep-purple accent-4"
                  indeterminate
                  rounded
                  height="6"
                ></v-progress-linear>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>

        <v-flex xs12 class="lock" v-if="article != null">

         <v-card  class="mx-auto">
           <v-card-text>
              <h3>Visit source for more interesting articles</h3>
              <v-btn class="deep-purple white--text" :href="article.link">Visit Source</v-btn>
           </v-card-text>
         </v-card>

        <h1 v-html="article.title.rendered">{{article.title.rendered}}</h1>
        <p v-html="article.content.rendered">{{article.content.rendered}}</p>
        </v-flex>

        <v-flex xs12 class="lock" v-if="sunday != null">

         <v-card class="mx-auto">
          <v-card-text>
            <h3>Visit source for more interesting articles</h3>
            <v-btn class="deep-purple white--text" :href="sunday.link">Visit Source</v-btn>
          </v-card-text>
         </v-card>

        <h1 v-html="sunday.title.rendered">{{sunday.title.rendered}}</h1>
        <p v-html="sunday.content.rendered">{{sunday.content.rendered}}</p>
        </v-flex>

      </v-layout>
      <!--End Local News Articles Section -->
      
    </v-container>
</template>

<script>
  export default {
    props: ['slug'],
    data() {
    return {
      article: null,
      sunday: null,
    }
  },
    methods: {
      created(){
      fetch('https://yourbotswana.com/wp-json/wp/v2/posts/')
      .then((res) => res.json())
      .then((data) => {
        let _this = this
        var p
       // for(let i = 0; i < data.length; i++)
        data.forEach(function(post){
          
          if(post.slug == _this.slug){
             p = post
          }

          })
      
        //let _this = this
           this.article = p

      })
    },
    sundayStandard(){
      fetch('https://www.sundaystandard.info/wp-json/wp/v2/posts/')
      .then((res) => res.json())
      .then((data) => {
       let _this = this
        var d
       // for(let i = 0; i < data.length; i++)
        data.forEach(function(post){
          
          if(post.slug == _this.slug){
             d = post
          }

          })
 
        //let _this = this
           this.sunday = d
      })
    }
    },
    beforeMount(){
    this.created()
    this.sundayStandard()
 }
  }
</script>

<style scoped>
    .lock{
        overflow-x:hidden;
    }
</style>