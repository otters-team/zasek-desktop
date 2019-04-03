<template>
  <v-navigation-drawer
    :value="value"
    clipped
    absolute
    floating
    :width="200"
    overflow
    app
    class="side-menu"
    :class="{'side-menu--with-shadow': value}"
    @input="newValue => $emit('input', newValue)"
  >
    <v-list class="py-3">
      <v-list-tile
        v-for="(item, index) in items"
        :key="index"
        class="side-menu__item py-1"
        @click="$router.push({name: item.to})"
      >
        <v-list-tile-action>
          <v-icon
            v-if="item.icon"
            class="side-menu__item-icon primary--text"
          >
            {{ item.icon }}
          </v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title class="side-menu__item-text primary--text">
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    value: Boolean,
  },
  computed: {
    items() {
      return [
        {
          to: 'tracker',
          text: 'Main page',
          icon: 'home',
        },
        {
          to: 'about',
          text: 'About page',
          icon: 'info',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~styles";

.side-menu {
  border-bottom-right-radius: $border-radius;

  &--with-shadow {
    @include shadow();
  }
}
</style>

