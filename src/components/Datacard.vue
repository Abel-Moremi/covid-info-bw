<template>
  <v-card
    class="mx-auto"
    
  >
    <v-card-text>
     
      <p class="display-3 color text-center">
        {{data}}
      </p>
      <div class="display-1 text--primary text-center">
        {{title}}
      </div>
    </v-card-text>
    <v-card-actions>

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
  .color{
    color:purple;
  }
</style>