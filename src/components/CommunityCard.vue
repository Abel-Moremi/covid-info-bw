<template>
  <v-card
    class="mx-auto mg-top bg-img"
    color="deep-purple accent-1"
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-flag
      </v-icon>
      <span class="title font-weight-light">{{place}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "{{message}}"
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="white">
          <v-img
            class="elevation-6"
            src="@/assets/user.png"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{author}}</v-list-item-title>
        </v-list-item-content>

    
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['place','message', 'author'],
    data: () => ({
      //
    }),
  }
</script>

<style >
  .mg-top{
    margin-top:30px;
  }

  .bg-img{
    background: url(../assets/flag.jpg);
    background-size: cover;
  }
</style>