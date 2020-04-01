<template>
    <v-container class="my-5">
      <!--WHO Latest Updates Section -->
      <v-layout row>
        
        <v-flex xs12 class="lock">
 
        <h1>{{article.title.rendered}}</h1>
        <p v-html="article.content.rendered">{{article.content.rendered}}</p>
 
        </v-flex>

      </v-layout>
      <!--End Local News Articles Section -->
      
    </v-container>
</template>

<script>
  export default {
    props: ['id'],
    data() {
    return {
      article: null
    }
  },
    methods: {
      created(){
      fetch('https://yourbotswana.com/wp-json/wp/v2/posts/'+this.id)
      .then((res) => res.json())
      .then((data) => {
        let _this = this
           _this.article = data

      })
    }
    },
    beforeMount(){
    this.created()
 }
  }
</script>

<style scoped>
    .lock{
        overflow-x:hidden;
    }
</style>