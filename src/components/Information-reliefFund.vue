<template>
    <v-container>

        <v-col class="text-center" cols="12">
          <h1 class="display-1 mb-4">COVID-19 Relief Fund</h1>
          <h4 class="subheading">
            A relief fund to help<br>
            with efforts in the fight with corona
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
                text: 'Relief Fund',
                disabled: true,
            },
        ],
      }
    },
  }
</script>

<style scoped>
   
</style>