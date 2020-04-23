<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown" style="margin:auto">
    <v-timeline-item
      v-for="data in reports.slice().reverse()"
      :key="data.month"
      color="deep-purple lighten-2"
      large
      icon="mdi-calendar"
    >
      <template v-slot:opposite>
        <span>{{data.month}}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline deep-purple white--text"><strong>{{data.title}}</strong></v-card-title>
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
          </v-list >
          <span v-html="data.brief">{{data.brief}}</span>
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
        reports : []
      
      }
    },
      firestore: {
       reports: db.collection("WeeklyReports").orderBy('uid')
       
        
 
   // reports: db.collection('WeeklyReports'),
  },
  }
</script>

