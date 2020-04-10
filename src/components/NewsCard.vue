<template>
  <v-card
    max-width="544"
    class="mx-auto cmargin"
  >
    <v-list-item>
      <v-list-item-avatar color="deep-purple accent-4"><v-icon class="white--text">mdi-bell</v-icon></v-list-item-avatar>
      <v-list-item-content>
        <h2 v-html="title" class="headline"><strong>{{title}}</strong></h2>
        <v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text v-html="body">
      {{body}}
    </v-card-text>

    <v-container>
    <p><strong>Posted: </strong><em>{{date}}</em></p>
    </v-container>

    <v-card-actions>
    
      <v-btn
        text
        color="deep-purple accent-4"
        :href="`/news/${read}`"
      >
        Read
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
      props: ['title','author', 'body', 'read', 'date',],
    data: () => ({
      
    }),
    filters: {
    strippedContent: function(string) {
           return string.replace(/<\/?[^>]+>/ig, " "); 
    }
}
  }
</script>

<style scoped>
    .cmargin{
        margin-top:30px;
    }
</style>