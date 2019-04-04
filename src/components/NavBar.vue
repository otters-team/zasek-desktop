<template>
  <v-toolbar
    class="nav-bar primary white--text"
    clipped-left
    app
    absolute
  >
    <v-toolbar-side-icon
      v-if="isAuthenticated"
      class="nav-bar__menu-button white--text"
      @click.stop="$emit('input', !value)"
    />
    <v-toolbar-title>Zasek</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items >
      <user-profile v-if="isAuthenticated" />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

import UserProfile from '@/components/UserProfile'

export default {
  name: 'NavBar',
  components: {
    UserProfile,
  },
  props: {
    value: Boolean,
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
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
