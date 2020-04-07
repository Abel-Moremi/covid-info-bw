<template>
  <v-card :style="{background:`url(${image})`}"
    class="mx-auto bg-img"
    max-width="700"
  >
    <v-card-text>
      <h2 v-html="title" class="white--text">
        {{title}}
      </h2>
      <p>{{author}}</p>
      <div v-html="excerpt" class="white--text">
        {{excerpt}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="white deep-purple--text"
        :href="link"
      >
        read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
      props: ['title','author', 'excerpt', 'link', 'image'],
    data: () => ({
      
    }),
  }
</script>

<style>
  .bg-img{
    background-size:cover !important;
  }
</style>