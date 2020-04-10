<template>
    <v-container style="height: 400px;">
      <v-row
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col
          class="subtitle-1 text-center"
          cols="12"
        >
        <v-icon class="display-3">mdi-radio-tower</v-icon><br>
          <strong>Live Stream Under Construction</strong><br>
          <small>we will notify you when it is ready</small>
        </v-col>
        <v-col cols="6">
          <v-progress-linear
            color="red accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
          
        </v-col>
                <v-col
          class="subtitle-1 text-center"
          cols="12"
        >
        <v-btn href="/news" class="deep-purple white--text">return to latest news</v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>