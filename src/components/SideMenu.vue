<template>
  <v-navigation-drawer v-model="primaryDrawer" clipped absolute overflow app class="side-menu">
    <v-list class="pt-0">
      <v-list-tile
        v-for="(item, index) in items"
        :key="index"
        @click="$router.push({name: item.to})"
        class="side-menu__item"
      >
        <v-list-tile-action>
          <v-icon class="side-menu__item-icon" v-if="item.icon">{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title class="side-menu__item-text">{{ item.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "side-menu",
  data: () => ({
    primaryDrawer: null
  }),
  computed: {
    items() {
      return [
        {
          to: "home",
          text: "Main page",
          icon: "home"
        },
        {
          to: "about",
          text: "About page",
          icon: "info"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~styles";

.side-menu {
  &__item {
    &-icon,
    &-text {
      color: $primary;
    }
  }
}
</style>

