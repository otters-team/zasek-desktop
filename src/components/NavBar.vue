<template>
  <v-toolbar class="nav-bar" clipped-left app absolute>
    <v-toolbar-side-icon class="nav-bar__menu-button" @click.stop="primaryDrawer = !primaryDrawer"/>
    <v-toolbar-title>Zasek</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: "nav-bar"
};
</script>

<style lang="scss" scoped>
@import "~styles";

.nav-bar {
  background-color: $accent;
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;

  &,
  &__menu-button {
    color: $white;
  }
}
</style>
