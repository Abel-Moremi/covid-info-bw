<template>
  <v-card
    class="mx-auto"
    
  >
    <v-card-text>
     
      <h1 class="bld deep-purple--text text-center">
        {{data}}
      </h1>
      <div class="text--primary text-center">
        {{title}}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
      props: ['data','title'],
    data: () => ({
      
    }),
  }
</script>
<style>
  .bld{
    font-weight: bold;
  }
</style>