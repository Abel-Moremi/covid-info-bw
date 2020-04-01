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
      this._div = L.DomUtil.create("v-card", "mx-auto v-card v-sheet theme--light") // create a div with a class "info"
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
        this._div.innerHTML =`<v-card-text class='v-card__text'>
                                <div>${title}</div>
                                    <p class="display-1 text--primary">
                                        ${name}
                                    </p>
                                <div class="text--primary">
                                    ${value} ${unit}`                       
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
  element.style {
    max-width: 344px;
}
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 4px;
}
.theme--light.v-card {
    background-color: #fff;
    color: rgba(0,0,0,.87);
}
.theme--light.v-sheet {
    background-color: #fff;
    border-color: #fff;
    color: rgba(0,0,0,.87);
}
.v-application .mx-auto {
    margin-right: auto!important;
    margin-left: auto!important;
}
.v-card {
    display: block;
    max-width: 100%;
    outline: none;
    text-decoration: none;
    transition-property: box-shadow,opacity;
    overflow-wrap: break-word;
    position: relative;
    white-space: normal;
    transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
    will-change: box-shadow;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
.v-card__text {
    width: 100%;
}
.v-card__subtitle, .v-card__text, .v-card__title {
    padding: 16px;
}
.v-card__subtitle, .v-card__text {
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: .0071428571em;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.theme--light .text--primary {
    color: rgba(0,0,0,.87)!important;
}
.display-1 {
    font-size: 2.125rem!important;
    line-height: 2.5rem;
    letter-spacing: .0073529412em!important;
}
.display-1, .v-application{
    font-weight: 400;
    font-family: Roboto,sans-serif!important;
}

.v-card>:last-child:not(.v-btn):not(.v-chip) {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
}
.v-card>.v-card__progress+:not(.v-btn):not(.v-chip), .v-card>:first-child:not(.v-btn):not(.v-chip) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}
.theme--light.v-card .v-card__subtitle, .theme--light.v-card>.v-card__text {
    color: rgba(0,0,0,.6);
}

.v-card__text {
    width: 100%;
}
.v-card__subtitle, .v-card__text, .v-card__title {
    padding: 16px;
}
.v-card__subtitle, .v-card__text {
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: .0071428571em;
}
* {
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
}
.v-card {
    display: flex;
}

</style>