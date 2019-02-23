<template>
  <div>
    <h1 class="mb-3 accent--text">Home page</h1>
    <v-card class="test">qwewqe</v-card>
  </div>
</template>

<script>
export default {
  name: "home-page"
};
</script>

<style lang="scss" scoped>
@import "~styles";

.test {
  padding: 20px;
  border-radius: $border-radius / 2;
  @include shadow();
}
</style>
