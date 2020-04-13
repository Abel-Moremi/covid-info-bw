<template>
  <v-card
    class="mx-auto"
    
  >
    <v-card-text>
     
      <h1 class="bld grey--text text-center">
       <strong> {{data}}</strong>
      </h1>
      <div class="text--primary text-center">
        <strong>{{title}}</strong>
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