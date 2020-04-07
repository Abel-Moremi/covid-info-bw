<template>
  <v-card
    class="mx-auto"
    max-width=""
  >
    <v-card-text>
      <h2 v-html="title" class="text--primary">
        {{title}}
      </h2>
      <p>{{author}}</p>
      <div v-html="excerpt" class="text--primary">
        {{excerpt}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
        :href="link"
      >
        read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
      props: ['title','author', 'excerpt', 'link'],
    data: () => ({
      
    }),
  }
</script>