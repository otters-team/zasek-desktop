<template>
  <v-toolbar class="nav-bar" :style="gradientStyeObject" clipped-left app absolute>
    <v-toolbar-side-icon class="nav-bar__menu-button" @click.stop="$emit('input', !value)"/>
    <v-toolbar-title>Zasek</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import { randomGradient } from "@/utils/styleUtils";

export default {
  name: "nav-bar",
  props: ["value"],
  computed: {
    gradientStyeObject: () => randomGradient()
  }
};
</script>

<style lang="scss" scoped>
@import "~styles";

.nav-bar {
  border-bottom-left-radius: $border-radius * 3;
  border-bottom-right-radius: $border-radius * 3;

  &,
  &__menu-button {
    color: $white;
  }
}
</style>
