<template>
  <v-card
    max-width="544"
    class="mx-auto cmargin"
  >
    <v-list-item>
      <v-list-item-avatar color="deep-purple accent-4"><v-icon class="white--text">mdi-bell</v-icon></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-html="title" class="headline display-1">{{title}}</v-list-item-title>
        <v-list-item-subtitle><p>yourbotswana.com</p></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text v-html="body">
      {{body}}
    </v-card-text>

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
      props: ['title','author', 'body', 'read'],
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