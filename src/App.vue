<template>
  <v-app>
    <AppNav/>
    <router-view></router-view>
    <AppFooter/>
  </v-app>
  
</template>

<script>
import AppNav from './components/layout/AppNav';
import AppFooter from './components/layout/AppFooter';
export default {
  name: 'App',

  components: {
    AppNav,AppFooter
  },

  data: () => ({
    //
  }),
};
</script>
