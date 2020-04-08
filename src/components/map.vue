<template>
    <v-container>
        <l-map style="background:white" ref="map"
              :zoom="zoom"
              :center="center"
              :options="mapOptions"
              :bounds="bounds"
              @update:zoom="zoomUpdated"
              @update:center="centerUpdated"
              @update:bounds="boundsUpdated"
        >
            <l-choropleth-layer
                    v-if="maskAdded"
                    :data="mapData"
                    titleKey="name"
                    idKey="code"
                    :value="value"
                    :extraValues="extraValues"
                    geojsonIdKey="id_1"
                    :geojson="geoData"
                    :colorScale="colorScale"
                    >
                <template slot-scope="props">
                    <l-info-control :item="props.currentItem" :unit="props.unit" title="District"
                                    placeholder="Hover/Click over a district" position="topright"
                    />
                </template>
            </l-choropleth-layer>
            <l-control position="bottomleft" >
               <v-switch v-model="mapSwitch" color="purple" flat :label="`${ mapSwitchLabel}`"></v-switch>
            </l-control>
        </l-map>  
    </v-container>
</template>

<script>
  import Vue from 'vue';
  import InfoControl from '../components/Map-InfoControl';
  import ChoroplethLayer from '../components/Map-Choropleth-Layer';
  import L from 'leaflet';
  import {LMap, LControl} from 'vue2-leaflet';
  import 'leaflet';
  import 'leaflet-boundary-canvas';
  import 'leaflet/dist/leaflet.css';
  import BWA from '../assets/data/botswana.geojson.json';
  import features from '../assets/data/botswana.districts.json';
  import sadc from '../assets/data/sadc.geo.json'
  import { db } from '../assets/utilities/db'

  var BwaRegions = features;
  var BwaGeoJson = BWA;
  var SadcGeoJson = sadc;

  export default Vue.extend({

    
    name: 'Map',

    components: {
      LMap,
      LControl,
      'l-info-control': InfoControl,
      'l-choropleth-layer': ChoroplethLayer
    },

    data: () => ({
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [-22.319394204522993, 23.1591796875],
      zoom: 6.2,
      bounds: [[-15.527718668097657, 29.402278535124022], [-28.275049933352996, 20.21789168575295]],
      BwaRegions,
      SadcGeoJson,
      mapData: [],
      districtData: [],
      sadcCountriesData: [],
      geoData: {},
      mapSwitch: false,
      mapSwitchLabel: "Botswana",
      zoomAnimation: true,
      colorScale: ["#00ff40", "#04ff00", "#84ff00", "#bfff00", '#eeff00', '#ffe100', '#ff9d00', '#ff5500', '#ff0000'],
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
      sadcCountriesData: db.collection('SadcCountriesData')
    },
    mounted() {
      this.mapDisplayBounds(BwaGeoJson);
      this.mapData = this.districtData;
      this.geoData = BwaRegions;
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
      },
      mapDisplayBounds(geoJson) {
        this.$nextTick()
        .then(() => {
          const map = this.$refs.map.mapObject;
          window.L.TileLayer.boundaryCanvas(
            this.url, {
              boundary: geoJson, 
            }).addTo(map);
          return this.$nextTick();
        })
        .then(() => {
          this.maskAdded = true;
        })
      },
      removeMapLayer(){
        const map = this.$refs.map.mapObject;
        var layers = [];
        map.eachLayer(function(layer) {
            if( layer instanceof L.TileLayer )
                layers.push(layer);
        });
        
        map.removeLayer(layers[0])
      }
    },
     watch: {
      mapSwitch(value){
        if(value){
          this.removeMapLayer();
          this.mapDisplayBounds(SadcGeoJson);
          this.mapSwitchLabel = "SADC";
          this.mapData = this.sadcCountriesData;
          this.geoData = SadcGeoJson;
        }else{
          this.removeMapLayer();
          this.mapDisplayBounds(BwaGeoJson);
          this.mapSwitchLabel = "Botswana";
          this.mapData = this.districtData;
          this.geoData = BwaRegions;
        }
      }
    }
  })
</script>
<style lang="scss" scoped>
  html:not(#_) {
      overflow-y: hidden;
      .container {
        z-index: 0;
          margin-bottom:20px;  
          margin-top:30px;
          height: 80vh;
          width: 95vw;
          max-width: none;
          padding: 0;
      }
  } 
</style>
