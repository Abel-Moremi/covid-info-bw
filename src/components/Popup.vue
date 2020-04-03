<template>
<v-container>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
          <br><br>
        <v-btn color="deep-purple white--text" dark v-on="on">Send Message</v-btn>
       
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Message</span>
        </v-card-title>
        <v-card-text>
           <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="place"
      :rules="nameRules"
      label="Place"
      required
    ></v-text-field>

    <v-textarea
      v-model="message"
      label="Message"
      required
    ></v-textarea>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="My message does not include any hate speech or vulgar language and serves only as words of encouragement."
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="deep-purple white--text"
      class="mr-4"
      @click="submit"
      :loading="loading"
    >
      Send
    </v-btn>

  </v-form>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red white--text" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

 </v-container>
</template>

<script>
import { db } from '../assets/utilities/db'

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'This field is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      place: '',
      message: '',
      dialog: false,
      checkbox: false,
      loading: false
    }),
    methods: {
      submit () {
          if(this.$refs.form.validate()){
              this.loading = true
                const message = { 
                name: this.name,
                place: this.place,
                message: this.message,
                }

            db.collection('messages').add(message).then(() => {
                    this.loading = false
                    this.dialog = false
                console.log('added to db')
            })
          }
        
      },
    }
  }
</script>