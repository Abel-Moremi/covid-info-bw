<template>
    <v-container>
        <div class="text-center" v-if="isNotHome">
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
                @hotlineClicked="toggle_hotline"
            />
        </keep-alive>
    </v-container>
</template>

<script>
  import Info_home from '../components/Information-home';
  import Info_hotline from '../components/Information-hotline';
  import Info_faq from '../components/Faq';
  
  export default {

    components: {
      Info_home,
      Info_hotline,
      Info_faq
    },
    data () {
      return {
        currentComponent: "Info_home",
        isNotHome: false
      }
    },
    methods: {
        toggle_faq(){
            this.currentComponent = Info_faq;
            this.isNotHome = true;
        },
        toggle_hotline(){
            this.currentComponent = Info_hotline;
            this.isNotHome = true;
        },
        toggle_back(){
            this.currentComponent = Info_home;
            this.isNotHome = false;
        }
    }
  }
</script>

<style scoped>
    
</style>