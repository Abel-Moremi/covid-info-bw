<template>
  <v-container>
    
    <v-img
    height="100%"
    width="100%">
 
      <l-map
        style="z-index: 0; height: 50vh; width: 1000vh"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <l-tile-layer :url="url"></l-tile-layer>
      </l-map>
    </v-img>


  </v-container>
</template>

<script>

  import {LMap, LTileLayer} from 'vue2-leaflet';
  import "leaflet/dist/leaflet.css";

  export default {
    name: 'Map',
  
    components: {
      LMap,
      LTileLayer,
    },

    data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 3,
      center: [-22.342, 24.687],
      bounds: null
    };
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    }
  }
}
</script>
