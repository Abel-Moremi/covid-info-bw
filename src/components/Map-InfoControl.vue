<template>
    <v-container>
    </v-container>
</template>

<script>
import L from 'leaflet';
export default {
  props: {
    item: Object,
    unit: String,
    placeholder: {
      type: String,
      default: ""
    },
    title: String,
    position: {
      type: String,
      default: "bottomleft"
    }
  },
  mounted() {
    const { unit, title, placeholder, position } = this
    this.mapObject = L.control({
      position: position
    })
    this.mapObject.onAdd = function() {
      this._div = L.DomUtil.create("v-card", "mx-auto") // create a div with a class "info"
      this.update({ name: "", value: 0, unit, placeholder, title })
      return this._div
    }
    this.mapObject.update = function({
      name,
      value,
      extraValues = undefined,
      unit,
      title,
      placeholder
    }) {
      if (name.length > 0) {
        this._div.innerHTML =`<v-card-text>
                                <div>${title}</div>
                                    <p class="display-1 text--primary">
                                        
                                    </p>
                                <div class="text--primary">
                                    <b> ${name} </b><br /> ${value} ${unit}`                       
        if (extraValues) {
          for (let x of extraValues) {
            this._div.innerHTML =
              this._div.innerHTML + `<br/> ${x.value} ${x.metric}`
          }
        }

        this._div.innerHTML =
              this._div.innerHTML + `</div>
                                </v-card-text>
                            </v-card>`

      } else {
        this._div.innerHTML = `<h4> ${title} </h4> <b> ${placeholder} </b>`
      }
    }
    if (this.$parent._isMounted) {
      this.deferredMountedTo(this.$parent.mapObject)
    }
  },
  methods: {
    deferredMountedTo(parent) {
      this.parent = parent
      this.mapObject.addTo(parent)
    }
  },
  watch: {
    item: function(newValue) {
      this.mapObject.update({
        ...newValue,
        unit: this.unit,
        title: this.title,
        placeholder: this.placeholder
      })
    }
  },
  beforeDestroy() {
    if (this.parent) {
      this.parent.removeControl(this.mapObject)
    }
  }
}
</script>
<style scoped>

</style>