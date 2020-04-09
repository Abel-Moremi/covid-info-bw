<template>
    <v-container>
        <div class="text-center">
            <v-btn 
                class="ma-2" 
                cols="12" 
                sm="3" 
                outlined 
                color="deep-purple accent-4 "
                v-on:click="toggle_back"
                >
                Back
            </v-btn>
        </div>
        <keep-alive>
            <component 
                v-bind:is="currentComponent" 
                @faqClicked="toggle_faq"
            />
        </keep-alive>
    </v-container>
</template>

<script>
  import Info_home from '../components/Information-home';
  import faq from '../components/Faq';
  
  export default {

    components: {
      Info_home,
      faq
    },
    data () {
      return {
        currentComponent: "Info_home",
      }
    },
    methods: {
        toggle_faq(){
            this.currentComponent = faq;
        },
        toggle_back(){
            this.currentComponent = Info_home;
        }
    }
  }
</script>

<style scoped>
    
</style>