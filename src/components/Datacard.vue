<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>last updated 4hrs ago</div>
      <p class="display-3 text--primary">
        {{data}}
      </p>
      <div class="display-1 text--primary">
        {{title}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
      props: ['data','title'],
    data: () => ({
      
    }),
  }
</script>
<style scoped>

</style>