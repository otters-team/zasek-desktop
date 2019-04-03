<template>
  <v-app id="app">
    <side-menu v-model="isSideMenuOpen" />
    <nav-bar v-model="isSideMenuOpen" />

    <v-content>
      <v-container fill-height fluid>
        <v-layout>
          <router-view />
        </v-layout>
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
