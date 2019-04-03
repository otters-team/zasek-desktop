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
            class="side-menu__item-icon"
          >
            {{ item.icon }}
          </v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title class="side-menu__item-text">
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
  props: ['value',],
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
  background-color: $white;
  border-bottom-right-radius: $border-radius * 3;

  &__item {
    &-icon,
    &-text {
      color: $primary;
    }
  }

  &--with-shadow {
    @include shadow();
  }
}
</style>

