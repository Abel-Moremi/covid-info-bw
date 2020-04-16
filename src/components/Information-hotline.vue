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
             <h4 class="subheading">
            list of hotlines<br>
            designated for covid-19
            <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                    <v-btn text small color="deep-purple accent-4 " href="feaf" >
                    source: BW Government
                    </v-btn>
                </div>
            </v-col>
          </h4>
        </v-col>

         <v-list-item two-line class="text-center">
            <v-list-item-content>
                <v-list-item-title class="font-weight-bold deep-purple--text accent-4 ">0800 600 740</v-list-item-title>
                <v-list-item-subtitle>toll free</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>


         <v-list-item two-line class="text-center">
            <v-list-item-content>
                <v-list-item-title class="font-weight-bold deep-purple--text accent-4 ">0800 600 111</v-list-item-title>
                <v-list-item-subtitle>toll free</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        
        <v-list-item two-line class="text-center">
            <v-list-item-content>
                <v-list-item-title class="font-weight-bold deep-purple--text accent-4 ">16649</v-list-item-title>
                <v-list-item-subtitle>24hr Helpline, toll free</v-list-item-subtitle>
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
            <h2>Local Government And Rural Development Contact Centers</h2>
            <h4 class="subheading">
                 The Ministry of Local Government and <br>
                 Rural Development advises on the following <br>
                 toll free lines and landlines to contact <br>
                 on issues related to COVID-19.  
                 <v-col class="text-center" cols="12" sm="4">
                    <div class="my-2">
                        <v-btn text small color="deep-purple accent-4 " href="https://www.facebook.com/BotswanaGovernment/photos/pcb.2908031565946149/2908246685924637/?type=3&theater" >
                        source: BW Government
                        </v-btn>
                    </div>
                </v-col>
            </h4>
        </v-col>
        <br>
          <v-card>
            <v-card-title>
                <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="numbers"
                :search="search"
            ></v-data-table>
        </v-card>
          
        <br><br>

         <v-col class="text-center" cols="12">
            <h2>Hospitals/Isolation Centers</h2>
            <h4 class="subheading">
                 hospitals/Clinics<br>
                designated for covid-19
            </h4>
        </v-col>
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
        <br>
    </v-container>
</template>

<script>

  export default {

 
    data () {
      return {
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
        ],
         search: '',
        headers: [
            {
                text: 'Local Authority',
                align: 'start',
                filterable: true,
                value: 'name',
            },
            { text: 'Toll Free', value: 'number' },
        ],
        numbers: [
            {
                name: 'MLGRD Headquaters',
                number: "0800 600 718",
            },
            {
                name: 'Gaborone City Council',
                number: "0800 600 061",
            },
            {
                name: 'South East District Council',
                number: "0800 600 795",
            },
            {
                name: 'Tlokweng Sub-district',
                number: "392 5602",
            },
            {
                name: 'Southern District Council',
                number: "0800 600 776",
            },
            {
                name: 'Mabutsane Sub-District',
                number: "588 9292",
            },
            {
                name: 'GoodHope Sub-District',
                number: "548 6852",
            },
            {
                name: 'Moshupa Sub-District',
                number: "544 7000",
            },
            {
                name: 'Central District Council',
                number: "0800 600 796",
            },
            {
                name: 'Mahalapye Sub-District',
                number: "471 3194",
            },
            {
                name: 'Bobirwa Sub-District',
                number: "260 1230",
            },
            {
                name: 'Palapye Admin Authority',
                number: "492 2554",
            },
            {
                name: 'Serowe Admin Authority',
                number: "463 1138",
            },
            {
                name: 'Boteti Sub-District',
                number: "297 8231",
            },
            {
                name: 'Tonota sub-District',
                number: "428 4236",
            },
            {
                name: 'Totume Sub-District',
                number: "298 7224",
            },
            {
                name: 'North East District Council',
                number: "0800 600 759",
            },
            {
                name: 'Chobe District Council',
                number: "0800 600 875",
            },
            {
                name: 'Ghanzi District Council',
                number: "0800 600 770",
            },
            {
                name: 'Charles HIll Sub-District',
                number: "659 2239",
            },
            {
                name: 'Kgalagadi District Council',
                number: "0800 600 793",
            },
            {
                name: 'Hukuntsi Sub-District',
                number: "651 0107",
            },
            {
                name: 'Tsabong Sub-District',
                number: "654 0256",
            },
             {
                name: 'North West District Council',
                number: "0800 600 792",
            },
            {
                name: 'Maun Admin Authority',
                number: "686 1647",
            },
            {
                name: 'Okavango Sub-District',
                number: "687 4057",
            },
            {
                name: 'Kgatleng District Council',
                number: "0800 600 880",
            },
            {
                name: 'Kweneng District Council',
                number: "0800 600 749",
            },
            {
                name: 'Letlhakaneng Sub-District',
                number: "594 3021"
            },
            {
                name: 'Mogoditshane/Thamaga Sub-District',
                number: "3991 0350",
            },
            {
                name: 'MAA/Lentweletau Sub-District',
                number: "591 5122",
            },
            {
                name: 'Sowa Township',
                number: "0800 600 754",
            },
            {
                name: 'Francistown City Council',
                number: "0800 600 242",
            },
            {
                name: 'Jwaneng Town Council',
                number: "0800 600 765",
            },
            {
                name: 'Lobatse Town Council',
                number: "0800 600 876",
            },
            {
                name: 'Selibe-Phikwe Town Council',
                number: "0800 600 746",
            },
        ],  
      }
    },
  }
</script>

<style scoped>
   
</style>