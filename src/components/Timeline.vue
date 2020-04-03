<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="data in info"
      :key="data.month"
      color="deep-purple lighten-2"
      large
    >
      <template v-slot:opposite>
        <span>{{data.month}}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">{{data.title}}</v-card-title>
        <v-card-text>
          <v-list two-line subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Confirmed</v-list-item-title>
                <v-list-item-subtitle>{{data.confirmed}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Deaths</v-list-item-title>
                <v-list-item-subtitle>{{data.deaths}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Recovered</v-list-item-title>
                <v-list-item-subtitle>{{data.recovered}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
    </v-list>
          {{data.brief}}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { db } from '../assets/utilities/db'

  export default {
 
    data () {
      return {
        info : []
      
      }
    },
      firestore: {
    info: db.collection('WeeklyReports'),
  },
  }
</script>