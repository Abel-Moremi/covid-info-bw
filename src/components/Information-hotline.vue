<template>
    <v-container>

        <v-col class="text-center" cols="12">
          <h1 class="display-1 mb-4">Hotlines</h1>
          <h4 class="subheading">
            list of hotlines and hospitals/Clinics<br>
            designated for covid-19
          </h4>
        </v-col>

        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <v-col class="text-center" cols="12">
            <h2>Hotlines</h2>
        </v-col>
        
        <v-list-item two-line class="text-center">
            <v-list-item-content>
                <v-list-item-title class="font-weight-bold deep-purple--text accent-4 ">16649</v-list-item-title>
                <v-list-item-subtitle>24hr Helpline</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line class="text-center">
            <v-list-item-content>
                <v-list-item-title class="font-weight-bold deep-purple--text accent-4 ">363 2273</v-list-item-title>
                <v-list-item-subtitle>Available between 7:30 - 22:00</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line class="text-center">
            <v-list-item-content>
                <v-list-item-title class="font-weight-bold deep-purple--text accent-4 ">363 2756/7</v-list-item-title>
                <v-list-item-subtitle>Available between 7:30 - 22:00</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line class="text-center">
            <v-list-item-content>
                <v-list-item-title class="font-weight-bold deep-purple--text accent-4 ">997</v-list-item-title>
                <v-list-item-subtitle>Health Emergency Number</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>


        <br><br>

         <v-col class="text-center" cols="12">
            <h2>Hospitals/Isolation Centers</h2>
                 <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-center font-weight-bold deep-purple--text accent-4 ">Name</th>
                            <th class="text-center font-weight-bold deep-purple--text accent-4 ">Place</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in hospitalData" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.place }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
        </v-col>
        <br>
    </v-container>
</template>

<script>

  export default {

 
    data () {
      return {
        faq : [],
        lockdown : [],
        items: [
            {
                text: 'Information',
                disabled: true,
            },
            {
                text: 'Hotlines',
                disabled: true,
            },
        ],
        hospitalData:[
            {name: "Sir Ketumile Masire Teaching Hospital", place: "Gaborone"},
            {name: "Matshwane Clinic", place: "Maun"},
            {name: "Kasane Hospital", place: "Kasane"},
            {name: "Ntshe Clinic", place: "Francistown"},
            {name: "Gantsi Hospice", place: "Gantsi"},
            {name: "Peleng East Clinic", place: "Lobatse"},
            {name: "Old Sekgoma Hospital", place: "Palapye"},
            {name: "Magope clinic", place: "South-East"},
            {name: "Mamuno Border Clininc", place: "Charles-Hill"},
            {name: "Gumare Primary Hospital", place: "Okavango"},

        ]   
      }
    },
  }
</script>

<style scoped>
   
</style>