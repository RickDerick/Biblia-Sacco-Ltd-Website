<template>
<v-card elevation="0" class="mx-auto mt-15" flat>
<v-container fluid>
<v-row>
    <v-col cols="12" md="6" sm="6">
        <v-card elevation="0" flat>
            <v-card-title>Leave Us a Message</v-card-title>
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
      outlined
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      outlined
      required
    ></v-text-field>
    <v-text-field
      v-model="subject"
      :rules="subjectRules"
      label="Subject"
      outlined
      required
    ></v-text-field>
    <v-text-field
      v-model="message"
      :rules="messageRules"
      label="Message"
      outlined
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label=" I agree with your terms & conditions."
      outlined
      required
    ></v-checkbox>

    <v-btn
      color="primary"
    >
      Send Message
    </v-btn>
  </v-form>
        </v-card>

    </v-col>
    <v-col cols="12" md="6" sm="6">
        <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
  <v-list-item>
      <v-list-item-content>
        <v-list-item-title>working Hours</v-list-item-title>
        <v-list-item-subtitle>Monday – Friday : 8am – 5pm</v-list-item-subtitle>
        <v-list-item-subtitle>Saturday : 9am – 12pm</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list>
      <v-subheader></v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
    </v-col>
</v-row>
</v-container>
</v-card>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      subjectRules: [
        v => !!v || 'Subject is required',
        v => (v && v.length <= 20) || 'Subject must be less than 20 characters',
      ],
      messageRules: [
        v => !!v || 'message is required',
        v => (v && v.length <= 255) || 'Subject must be less than 255 characters',
      ],
      
      checkbox: false,
      selectedItem: 1,
      items: [
        { text: 'Kamirembe Place,Ring Road,Opposite Shan Shui Hotel.', icon: 'mdi-map-marker-outline' },
        { text: '0721393609, 0111030700', icon: 'mdi-phone' },
        { text: 'info@bibliasacco.com', icon: 'mdi-email' },
        { text: 'P.O box 7041-00300 Nairobi.', icon: 'mdi-map-marker-outline' },
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      
    },
  }
</script>
<style>
</style>