<template>
  <v-card elevation="0">
  <v-card
    class="max-width=100%" 
  >
    <v-system-bar
      color="indigo darken-4"
      dark
    >
      <!-- <v-spacer></v-spacer> -->

      <div class="ml-15">
      <v-icon class="mx-3" @click="openSocialMedia('facebook')">mdi-facebook</v-icon>
    <!-- <v-icon class="mx-3" @click="openSocialMedia('linkedin')">mdi-linkedin</v-icon> -->
    <!-- <v-icon class="mx-3" @click="openSocialMedia('instagram')">mdi-instagram"></v-icon> -->
    <v-icon class="mx-3" @click="openSocialMedia('twitter')">mdi-twitter</v-icon>
      </div>
    </v-system-bar>
  </v-card>
  <v-app-bar
      color="blue"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Bibilia Sacco Ltd</v-toolbar-title>
      <v-row justify="center" no-gutters>
        <v-button 
        v-for="link in links"
         :key="link"
          color="white"
          text
         rounded
        class="mx-5">
        {{ link }}
        </v-button>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  </template>
  
  <script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
    methods: {
    //   openSocialLink(network) {
    //     // Implement code to open the respective social media link based on the 'network' parameter
    //     // Example: window.open(`https://www.${network}.com/your_social_media_profile`, '_blank');
    //   },
    },
  };

  </script>
  
  <style scoped>
  
  </style>
  