<template>
  <v-container
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
      <l-choropleth-layer :data="pyDepartmentsData" titleKey="department_name" idKey="department_id" :value="value" :extraValues="extraValues" geojsonIdKey="dpto" :geojson="paraguayGeojson" :colorScale="colorScale">
        <template slot-scope="props">
          <l-info-control :item="props.currentItem" :unit="props.unit" title="Department" placeholder="Hover over a District"/>
          <l-reference-chart title="Girls school enrolment" :colorScale="colorScale" :min="props.min" :max="props.max" position="topright"/>
        </template>
      </l-choropleth-layer>
     <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
  


  </v-container>
</template>

<script>

  import {InfoControl, ReferenceChart, ChoroplethLayer } from 'vue-choropleth'
  //import { geojson } from '../data/py-departments-geojson'
  import { pyDepartmentsData } from '../data/py-departments-data.js'
  import paraguayGeojson from '../data/paraguay.json'

  import {LMap, LTileLayer} from 'vue2-leaflet';
  import "leaflet/dist/leaflet.css";

  export default {
    name: 'Map',
  
    components: {
      LMap,
      LTileLayer,
     'l-info-control': InfoControl, 
     'l-reference-chart': ReferenceChart, 
     'l-choropleth-layer': ChoroplethLayer 
    },

    data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [-22.319394204522993, -253.45458984375003],
      zoom: 6,
      zoomAnimation: true,


      pyDepartmentsData,
      paraguayGeojson,
      colorScale: ["e7d090", "e9ae7b", "de7062"],
      value: {
        key: "amount_w",
        metric: "% girls"
      },
      extraValues: [{
        key: "amount_m",
        metric: "% boys"
      }],
      mapOptions: {
        attributionControl: false
      },
      currentStrokeColor: '3d3213'
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
