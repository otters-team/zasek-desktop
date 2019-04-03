<template>
  <v-toolbar
    class="nav-bar primary white--text"
    clipped-left
    app
    absolute
  >
    <v-toolbar-side-icon
      class="nav-bar__menu-button white--text"
      @click.stop="$emit('input', !value)"
    />
    <v-toolbar-title>Zasek</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    value: Boolean,
  },
}
</script>

<style lang="scss" scoped>
@import "~styles";

.nav-bar {
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
}
</style>
