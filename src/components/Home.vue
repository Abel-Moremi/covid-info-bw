<template>
    <div>
        <v-carousel hide-delimiters>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            >
            <v-row
                class="fill-height"
                align="center"
                justify="center"
                >
                <div class="display-3" id="bold">#Stay Home</div>
                </v-row>
            </v-carousel-item>

        </v-carousel>

        
    </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://wallpaperaccess.com/full/919436.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
        ],
      }
    },
  }
</script>

<style scoped>
#bold{
    font-weight:bold;
}
</style>