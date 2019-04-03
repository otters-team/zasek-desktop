<template>
  <v-flex>
    <new-task-form />
  </v-flex>
</template>

<script>
import NewTaskForm from '@/components/NewTaskForm'

export default {
  name: 'TrackerPage',
  components: {
    NewTaskForm,
  },
}
</script>

<style lang="scss" scoped>
@import "~styles";

.test {
  padding: 20px;
  border-radius: $border-radius / 2;
  @include shadow();
}
</style>
