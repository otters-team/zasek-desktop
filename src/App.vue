<template>
  <v-app id="app" class="app">
    <side-menu v-model="isSideMenuOpen"/>
    <nav-bar v-model="isSideMenuOpen"/>

    <v-content class="app__content">
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
    isSideMenuOpen: null
  }),
  components: {
    SideMenu,
    NavBar
  }
};
</script>

<style lang="scss">
@import "~styles";

.app {
  &__content {
    background-color: $white;
  }
}
</style>
