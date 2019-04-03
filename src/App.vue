<template>
  <v-app
    id="app"
    class="app"
  >
    <side-menu v-model="isSideMenuOpen" />
    <nav-bar v-model="isSideMenuOpen" />

    <v-content class="app__content">
      <v-container
        fluid
        class="app__content-wrapper"
      >
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import SideMenu from '@/components/SideMenu'
  import NavBar from '@/components/NavBar'

  export default {
    name: 'App',
    components: {
      SideMenu,
      NavBar,
    },
    data: () => ({
      isSideMenuOpen: null,
    }),
  }
</script>

<style scoped lang="scss">
  @import "~styles";

  .app {
    &__content {
      background-color: $white;
      &-wrapper {
        height: 100%;
      }
    }
  }
</style>
