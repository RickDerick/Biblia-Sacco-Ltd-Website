<template>
    <v-app-bar app color="primary lighten-1"> <!-- Adjust the color here -->
      <v-row align="center">
        <v-col cols="12" sm="6" md="4">
          <!-- Your app logo or title -->
          <div class="header-title white--text">Your App Name</div> <!-- Use white text color -->
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <!-- Social media icons -->
          <div class="social-icons">
            <v-icon class="mx-2" color="white" @click="openSocialLink('facebook')">mdi-facebook</v-icon> <!-- Use white text color -->
            <v-icon class="mx-2" color="white" @click="openSocialLink('twitter')">mdi-twitter</v-icon>
            <v-icon class="mx-2" color="white" @click="openSocialLink('instagram')">mdi-instagram</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    methods: {
    //   openSocialLink(network) {
    //     // Implement code to open the respective social media link based on the 'network' parameter
    //     // Example: window.open(`https://www.${network}.com/your_social_media_profile`, '_blank');
    //   },
    },
  };
  </script>
  
  <style scoped>
  .header-title {
    font-size: 20px;
    font-weight: bold;
  }
  
  .social-icons {
    font-size: 24px;
    color: white;
  }
  </style>
  