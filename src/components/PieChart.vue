<template>
    <div>
        <v-container>
            <v-layout row>
              
              <v-flex xs12 md12 class="mt-4">
                  <v-card max-width="644" class="mx-auto cmargin px-10 pt-5">
                      <v-card-title><h3 class="text-center">Confirmed Cases : Males to Females</h3></v-card-title>
                      <v-card-text>
                          <div style="margin:auto" id="chart"></div>
                      </v-card-text>
                  </v-card>
              </v-flex>

              <v-flex xs12 md12 class="mt-4">
                  <v-card max-width="644" class="mx-auto cmargin px-10 pt-5">
                      <v-card-title><h3 class="text-center">Infections Per Age Group.</h3></v-card-title>
                      <v-card-text>
                          <apexchart  type="bar" :options="options" :series="series"></apexchart>
                      </v-card-text>
                  </v-card>
              </v-flex>

              
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import ApexCharts from 'apexcharts'
import apexchart from 'vue-apexcharts'


  export default {
      components: {apexchart},
    data: () => ({
            options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['0 - 12', '13 - 20', '21 - 35', '36 - 45', '46 - 65', '66+']
        }
      },
      series: [{
        name: 'infected persons',
        data: [0, 0, 9, 6, 4, 1]
      }], 

    }),
    methods : {
        draw(){
            var options = {
                chart: {    
                    type: 'pie'
                  },series: [14, 6],
                    labels: ['Male', 'Female' ],
                      plotOptions: {
                        pie: {
                        customScale: 1
                        }
                    }
                }

                var chart = new ApexCharts(document.getElementById("chart"), options);

                chart.render();
        },
        
    },
    mounted(){
        this.draw()
    }
  }
</script>

<style scoped>
    .mg{
        display: block !important;
    }
</style>