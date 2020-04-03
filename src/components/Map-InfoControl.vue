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
                                        </tr>`                       
        
          for (let x of extraValues) {

            this._div.innerHTML =
                  this._div.innerHTML + `<tr>
                                          <td>${x.value}</td>
                                          <td>${x.metric}</td>
                                        </tr>`
          }
       

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
*, :after, :before {
    box-sizing: inherit;
}
div {
    display: block;
}

/* Dense table css*/

.v-data-table {
    max-width: 100%;
}
.v-data-table {
    border-radius: 4px;
}

html {
    font-size: 16px;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
::selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
}
table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
}
thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
.v-data-table table {
    width: 100%;
    border-spacing: 0;
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
.text-left {
    text-align: left!important;
}

.v-data-table--dense th {
    height: 32px;
}
.v-data-table th {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: .75rem;
    height: 48px;
}
.v-data-table td, .v-data-table th {
    padding: 0 16px;
}
th {
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    text-align: -internal-center;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.theme--light.v-data-table tbody tr:not(:last-child) td:last-child, .theme--light.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row), .theme--light.v-data-table tbody tr:not(:last-child) th:last-child, .theme--light.v-data-table tbody tr:not(:last-child) th:not(.v-data-table__mobile-row) {
    border-bottom: thin solid rgba(0,0,0,.12);
}
.v-data-table--dense td {
    height: 24px;
}
.v-data-table td {
    font-size: .875rem;
    height: 48px;
}

.v-data-table td, .v-data-table th {
    padding: 0 16px;
}
.v-data-table__wrapper {
    overflow-x: auto;
    overflow-y: hidden;
}

</style>