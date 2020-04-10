<template>
    <v-container>

        <v-col class="text-center" cols="12">
          <h1 class="display-1 mb-4">FAQ</h1>
          <h4 class="subheading">
            list of frequently asked questions (FAQs)<br>
            and answers
          </h4>
        </v-col>

        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <v-col class="text-center" cols="12">
            <h2>General Questions</h2>
        </v-col>
        
        <br>
          <v-row justify="center">
            <v-expansion-panels inset>
                <v-expansion-panel
                    v-for="data in faq"
                    :key="data.question"
                >
                    <v-expansion-panel-header>
                        <p class="font-weight-black">{{data.question}}</p>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                          <p style v-html="data.answer"></p>
                          <v-col class="text-center" cols="12" sm="4">
                            <div class="my-2">
                              <v-btn text small color="deep-purple accent-4 " :href="data.sourceLink" >
                                source: {{data.sourceName}}
                              </v-btn>
                            </div>
                          </v-col>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
        <br><br>

         <v-col class="text-center" cols="12">
            <h2>About Lockdown</h2>
        </v-col>
        <br>
        <v-row justify="center">
            <v-expansion-panels inset>
            <v-expansion-panel
                v-for="data in lockdown"
                :key="data.question"
            >
                <v-expansion-panel-header>
                        <p class="font-weight-black">{{data.question}}</p>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                       <p style v-html="data.answer"></p>
                          <v-col class="text-center" cols="12" sm="4">
                            <div class="my-2">
                              <v-btn text small color="deep-purple accent-4 " :href="data.sourceLink" >
                                source: {{data.sourceName}}
                              </v-btn>
                            </div>
                          </v-col>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
    </v-container>
</template>

<script>
  import { db } from '../assets/utilities/db'

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
          text: 'FAQ',
          disabled: true,
        },
      ],   
      }
    },
    firestore: {
      faq: db.collection('Information').doc('FAQs').collection("General-Info"),
      lockdown: db.collection('Information').doc('FAQs').collection("About-Lockdown")
    },
  }
</script>

<style scoped>
   
</style>