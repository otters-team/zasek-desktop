<template>
  <v-app id="app">
    <v-navigation-drawer v-model="primaryDrawer" :clipped="true" absolute overflow app></v-navigation-drawer>

    <v-toolbar clipped-left app absolute>
      <v-toolbar-side-icon @click.stop="primaryDrawer = !primaryDrawer"/>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    primaryDrawer: null
  })
};
</script>

<style lang="scss">
.desktop-menu {
  margin-top: 58px;
}
</style>
