<template>
    <v-container>
        <l-map ref="map"
               :zoom="zoom"
               :center="center"
               :options="mapOptions"
               @update:zoom="zoomUpdated"
               @update:center="centerUpdated"
               @update:bounds="boundsUpdated"
        >
        </l-map>
    </v-container>
</template>

<script>
  import Vue from 'vue';
  import {LMap} from 'vue2-leaflet';
  import 'leaflet';
  import 'leaflet-boundary-canvas';
  import 'leaflet/dist/leaflet.css';
  import {bwGeoJson} from '../Data/botswana.geojson';

  export default Vue.extend({
    name: 'Map',

    components: {
      LMap,
    },

    data: () => ({
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [-22.319394204522993, -336.8408203125],
      zoom: 6.8,
      bounds: [],
      zoomAnimation: true,
      bwGeoJson,
      mapOptions: {
        zoomSnap: 0.1,
        attributionControl: false
      },
    }),
    mounted() {
      this.$nextTick(() => {
        const map = this.$refs.map.mapObject;
        window.L.TileLayer.boundaryCanvas(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            boundary: this.bwGeoJson.features[0],
          }).addTo(map);
      })
    },
    methods: {
      zoomUpdated(zoom) {
        this.zoom = zoom;
      },
      centerUpdated(center) {
        this.center = center;
      },
      boundsUpdated(bounds) {
        this.bounds = bounds;
      }
    }
  })
</script>
<style lang="scss">

    html:not(#_) {
        overflow-y: hidden;

        .container {
            height: 100%;
            width: 100%;
            max-width: none;
            padding: 0;
        }
    }
</style>
