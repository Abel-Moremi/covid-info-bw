<template>
    <v-container>
        <h2>General Questions</h2>
        <br>
          <v-row justify="center">
            <v-expansion-panels inset>
            <v-expansion-panel
                v-for="data in faq"
                :key="data.question"
            >
                <v-expansion-panel-header><strong><span class="disp">{{data.question}}</span></strong></v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-container style v-html="data.answer">
                        {{data.answer}}
                    </v-container>
                </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
<br><br>
        <h2>About Lockdowns</h2>
        <br>
                  <v-row justify="center">
            <v-expansion-panels inset>
            <v-expansion-panel
                v-for="data in lockdown"
                :key="data.question"
            >
                <v-expansion-panel-header><strong><span class="disp">{{data.question}}</span></strong></v-expansion-panel-header>
                <v-expansion-panel-content>
                {{data.answer}}
                </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
<br>
        <v-row class="text-center">
           <v-flex xs12>
            <h2>Sources</h2>
            <p><a href="http://www.emro.who.int/health-topics/corona-virus/questions-and-answers.html">World Health Organization.</a></p>
            <p><a href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">CDC</a></p>
           </v-flex>
        </v-row>
    </v-container>
</template>

<script>
  export default {

 
    data () {
      return {
        faq : [
            {question:'What are the symptoms of someone infected with COVID-19?', answer:"The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. <br><br>Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. <br><br> Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention."},
            {question:'Is there a treatment for COVID19?', answer:'Not yet. To date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019. However, those affected should receive care to relieve symptoms. <br><br> People with serious illness should be hospitalized. Most patients recover thanks to supportive care. Possible vaccines and some specific drug treatments are under investigation. They are being tested through clinical trials. WHO is coordinating efforts to develop vaccines and medicines to prevent and treat COVID-19. <br> <br>The most effective ways to protect yourself and others against COVID-19 are to frequently clean your hands, cover your cough with the bend of elbow or tissue, and maintain a distance of at least 1 meter (3 feet) from people who are coughing or sneezing.'},
            {question: 'Can i get sick with COVID-19 if it is on food?', answer: 'Based on information about this novel coronavirus thus far, it seems unlikely that COVID-19 can be transmitted through food – additional investigation is needed.'},
            {question: 'How does the virus spread?', answer: 'The virus that causes COVID-19 is thought to spread mainly from person to person, mainly through respiratory droplets produced when an infected person coughs or sneezes. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. <br><br>Spread is more likely when people are in close contact with one another (within about 1.8 meters). COVID-19 seems to be spreading easily and sustainably in the community (“community spread”) in many affected geographic areas. Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected.'},
            {question:'Is there anything i should not do?', answer:'The following measures ARE NOT effective against COVID-2019 and can be harmful: <br><br> <ul> <li>Smoking</li> <li>Wearing multiple masks</li> <li>Taking antibiotics)</li> </ul> <br>In any case, if you have fever, cough and difficulty breathing seek medical care early to reduce the risk of developing a more severe infection and be sure to share your recent travel history with your health care provider.'}
        ],
        lockdown : [
            {question: 'What is a state of emergency?', answer: 'A state of emergency is a situation in which a government is empowered to perform actions or impose policies that it would normally not be permitted to undertake. A government can declare such a state during a natural disaster, civil unrest, armed conflict, medical pandemic or epidemic or other biosecurity risk.'}
        ]   
      }
    },
  }
</script>

<style scoped>
    .disp{
        font-size:20px
    }
</style>