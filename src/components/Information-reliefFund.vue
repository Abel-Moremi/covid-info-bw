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

        <blockquote class="blockquote">
            The Government has established the COVID-19 Relief Fund and put up 
            an investment of Two Billion Pula as seed money into it. Individuals
            and the private sector are encouraged to contribute to this fund,
            the latter, as part of their social responsibility. Accounts have 
            been opened at First National Bank, Standard Chartered, Absa, Stanbic,
            Bank Gaborone, First Capital Bank, BancABC, Bank of Baroda as well as Bank of Botswana.
        </blockquote>



        <div class="content-center" v-for="bank in banks" :key="bank.name">
            <v-col class="text-center" cols="12">
                <h2>{{bank.name}}</h2>
            </v-col>
            
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-subtitle>    
                        <div>
                            <div class="d-inline font-weight-bold">Account Name: </div>
                            <div class="d-inline">{{ bank.accName }}</div>
                        </div>
                        <div>
                            <div class="d-inline font-weight-bold">Branch Name: </div>
                            <div class="d-inline">{{ bank.branchName }}</div>
                        </div>
                        <div>
                            <div class="d-inline font-weight-bold">Code: </div>
                            <div class="d-inline">{{ bank.Code }}</div>
                        </div>
                        <div>
                            <div class="d-inline font-weight-bold">Account Number: </div>
                            <div class="d-inline">{{ bank.accNumber }}</div>
                        </div>
                        <div>
                            <div class="d-inline font-weight-bold">Swift Code: </div>
                            <div class="d-inline">{{ bank.swiftCode }}</div>
                        </div>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <br>
        </div>


        <v-col class="text-center" cols="12" sm="4">
            <div class="my-2">
                <v-btn text small color="deep-purple accent-4 " href="https://www.gov.bw/covid-19-relief-fund" >
                source: BW Government
                </v-btn>
            </div>
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
        banks:[
            {
                name: 'First National Bank',
                accName: 'Covid-19 (Corona Virus) Relief Fund',
                branchName: 'First Place Branch',
                Code: '281467',
                accNumber: '62848017720',
                swiftCode: 'FIRNBWGX'
            },
            {
                name: 'Standard Charted Bank',
                accName: 'Covid-19 (Corona Virus) Relief Fund',
                branchName: 'Mall Branch',
                Code: '662167',
                accNumber: '0100158992205',
                swiftCode: 'SCHBBWGXXXX'
            },
            {
                name: 'ABSA Bank Botswana Limited',
                accName: 'Covid-19 (Corona Virus) Relief Fund',
                branchName: 'Mall Branch',
                Code: '290267',
                accNumber: '1044199',
                swiftCode: 'BARCBWGX'
            },
            {
                name: 'Bank Gaborone',
                accName: 'Covid-19 (Corona Virus) Relief Fund',
                branchName: 'Mall Branch',
                Code: '200667',
                accNumber: '8001161691',
                swiftCode: 'BGLIBWGX'
            },
             {
                name: 'Stanbic Bank Botswana',
                accName: 'Covid-19 (Corona Virus) Relief Fund',
                branchName: 'Fairground Branch',
                Code: '064967',
                accNumber: '9060003968532',
                swiftCode: 'N/A'
            },
            {
                name: 'BankABC',
                accName: 'Covid-19 (Corona Virus) Relief Fund',
                branchName: 'Corperate',
                Code: '552067',
                accNumber: '3318904640700',
                swiftCode: 'FMBZBWGA'
            },
            {
                name: 'Bank of Baroda',
                accName: 'Covid-19 (Corona Virus) Relief Fund',
                branchName: 'Main Mall',
                Code: '110-167',
                accNumber: '95210200002777',
                swiftCode: 'BARBBWGXXXX'
            },
        ]
      }
    },
  }
</script>

<style scoped>
   
</style>