<template>
    <v-container>
      <div id="117171632">
        <script type="text/javascript">
            try {
                window._mNHandle.queue.push(function (){
                    window._mNDetails.loadTag("117171632", "970x90", "117171632");
                });
            }
            catch (error) {}
        </script>
    </div>
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
      ad(){
          try {
              window._mNHandle.queue.push(function (){
                  window._mNDetails.loadTag("117171632", "970x90", "117171632");
              });
          }
          catch (error) {}
      },

      adTag(){
              window._mNHandle = window._mNHandle || {};
      window._mNHandle.queue = window._mNHandle.queue || [];
      medianet_versionId = "3121199";
      },
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
    },
        beforeMount(){
        this.ad()
        this.adTag()
    }
  }
</script>

<style scoped>
    
</style>