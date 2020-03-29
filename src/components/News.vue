<template>
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 md6 lg4>
          <v-btn block outline>click</v-btn>
        </v-flex>
                <v-flex xs12 md6 lg4>
          <v-btn block outline>click</v-btn>
        </v-flex>
                <v-flex xs12 md6 lg4>
          <v-btn block outline>click</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
  export default {
    data: () => ({
      isActive: false,
    }),
  }
</script>
<style scoped>

</style>