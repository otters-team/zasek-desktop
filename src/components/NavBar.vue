<template>
  <v-toolbar class="nav-bar" clipped-left app absolute>
    <v-toolbar-side-icon class="nav-bar__menu-button" @click.stop="$emit('input', !value)"/>
    <v-toolbar-title>Zasek</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: "nav-bar",
  props: {
    value: Boolean
  },
  data() {
    return {
      sideMenu: this.value
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~styles";

.nav-bar {
  @include gradient-bg();

  border-bottom-left-radius: $border-radius--big;
  border-bottom-right-radius: $border-radius--big;

  &,
  &__menu-button {
    color: $white;
  }
}
</style>
