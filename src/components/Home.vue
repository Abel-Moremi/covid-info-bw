<template>
    <v-app>
        <v-carousel hide-delimiters>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            >    <h1 class="text-center mgtop display-3"><strong>{{item.tag}}</strong></h1>
</v-carousel-item>
        </v-carousel>
    </v-app>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://lh3.googleusercontent.com/proxy/j7dlKrHt7lEqSvIvzTOOjKqpVNyw3OBmAL2tBqTkxSqBDGzv8D9hG73v3PM88H6MdQ1FVrEQ7Vm8dBoFM8MyUe-hYnwFEIKHsk1Kzt4NetvnE6TewKakOGYqBuQUbCRttjAzXTKgPJkkgAgyygm-NN0TVsHThQC73u21TLx8nnOyow',
            tag: '#Flattent The Curve.',
          },
          {
            src: 'https://images.hdqwalls.com/download/material-design-blue-and-white-to-1920x1080.jpg',
            tag: '#Stay Home.',
          },

        ],
      }
    },
  }
</script>
<style scoped>
.mgtop{
    margin-top:35vh; 
}
</style>