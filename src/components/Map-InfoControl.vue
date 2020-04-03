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
      this._div = L.DomUtil.create("div") // create a div with a class "info"
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
        this._div.innerHTML =`<div class='v-card mx-auto v-sheet theme--light'>
                                <div class='v-card__text'>
                                  <div>${title}</div>
                                      <p class="display-1 text--primary">
                                          ${name}
                                      </p>
                                  <div class="text--primary">
                                  <table class="v-data-table v-data-table--dense theme--light">
                                    <div class"v-data-table__wrapper">
                                      <tbody>
                                        <tr>
                                          <td>${value}</td>
                                          <td>${unit}</td>
                                        </tr>
                                        <tr>
                                          <td>${extraValues[0].value}</td>
                                          <td>${extraValues[0].metric}</td>
                                        </tr>`                       

        this._div.innerHTML =
              this._div.innerHTML + `</tbody>
                                  </div>
                                </table>
                                  </div>
                                </div>
                            </div>
                          </div>`

      } else {
        this._div.innerHTML = `
          <div class="text-center">
            <span class="ma-2 v-chip v-chip--outlined v-chip--pill theme--light v-size--default deep-purple accent-4 deep-purple--text text--accent-4">
              <span class="v-chip__content">
                <i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-information-outline theme--light"></i>
                ${placeholder}
              </span>
            </span>
          </div>`
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