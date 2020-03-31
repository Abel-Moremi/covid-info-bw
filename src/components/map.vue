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
            <l-choropleth-layer
                    v-if="maskAdded"
                    :data="districtData"
                    titleKey="name"
                    idKey="code"
                    :value="value"
                    :extraValues="extraValues"
                    geojsonIdKey="id_1"
                    :geojson="BwaRegions"
                    :colorScale="colorScale">
                <template slot-scope="props">
                    <l-info-control :item="props.currentItem" :unit="props.unit" title="District"
                                    placeholder="Hover over a district" position="topright"
                    />
                </template>
            </l-choropleth-layer>
        </l-map>
    </v-container>
</template>

<script>
  import Vue from 'vue';
  import {ChoroplethLayer, InfoControl} from 'vue-choropleth';
  import {LMap} from 'vue2-leaflet';
  import 'leaflet';
  import 'leaflet-boundary-canvas';
  import 'leaflet/dist/leaflet.css';
  import BWA from '../assets/data/botswana.geojson.json';
  import features from '../assets/data/botswana.districts.json';
  import { db } from '../assets/utilities/db'

  var BwaRegions = features;
  var BwaGeoJson = BWA;

  export default Vue.extend({

    
    name: 'Map',

    components: {
      LMap,
      'l-info-control': InfoControl,
      'l-choropleth-layer': ChoroplethLayer
    },

    data: () => ({
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [-22.319394204522993, 23.1591796875],
      zoom: 6.8,
      bounds: [],
      BwaRegions,
      districtData: [],
      zoomAnimation: true,
      colorScale: ["e7d090", "e9ae7b", "de7062"],
      value: {
        key: "confirmed",
        metric: " Confirmed"
      },
      extraValues: [{
        key: "deaths",
        metric: " Deaths"
      }],
      currentStrokeColor: 'fff',
      mapOptions: {
        zoomSnap: 0.1,
        attributionControl: false
      },
      maskAdded: false
    }),
    firestore: {
      districtData: db.collection('BwDistrictsData'),
    },
    mounted() {
      this.$nextTick()
        .then(() => {
          const map = this.$refs.map.mapObject;
          window.L.TileLayer.boundaryCanvas(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              boundary: BwaGeoJson.geometry,
            }).addTo(map);
          return this.$nextTick();
        })
        .then(() => {
          this.maskAdded = true;
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
<style lang="scss" scoped>

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
