<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="purple lighten-2">
          <h2 class="display-1 white--text font-weight-light">March 1 - 7</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
            <datatable />
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <v-icon size="64">mdi-calendar-text</v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="grey lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="grey lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">March 8 - 14</h2>
   
        </v-card-title>
        <v-container>
          <v-row>
              <v-col class="hidden-sm-and-down" md="2">
              <v-icon size="64">mdi-calendar-text</v-icon>
            </v-col>
            <v-col cols="12" md="10">
             <datatable />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="purple lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="purple lighten-1">
          <h2 class="display-1 white--text font-weight-light">March 15 - 21</h2>
        </v-card-title>
        <v-container>
            <v-row>
            <v-col cols="12" md="10">
             <datatable />
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <v-icon size="64">mdi-calendar-text</v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="grey lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="grey lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">March 22 - 28</h2>
        
        </v-card-title>
        <v-container>
          <v-row>
            <v-col class="hidden-sm-and-down" md="2">
              <v-icon size="64">mdi-calendar-text</v-icon>
            </v-col>
            <v-col cols="12" md="10">
              <datatable />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="green lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="green lighten-1">
          <h2 class="display-1 white--text font-weight-light">March 29 - 31</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </v-col>
             <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <v-icon size="64" class="green--text">mdi-calendar-text</v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import datatable from '../components/Table'

  export default {
      components: {datatable},
    data () {
      return {
      
      }
    },
  }
</script>