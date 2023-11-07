<template>
  <v-app>
    <AppNav/>
    <router-view></router-view>
  </v-app>
  
</template>

<script>
import AppNav from './components/layout/AppNav';
export default {
  name: 'App',

  components: {
    AppNav,
  },

  data: () => ({
    //
  }),
};
</script>
