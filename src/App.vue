<template>
  <v-app id="app">
    <side-menu/>

    <nav-bar/>

    <v-content class>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  data: () => ({
    primaryDrawer: null
  }),

  components: {
    SideMenu,
    NavBar
  }
};
</script>

<style lang="scss">
</style>
