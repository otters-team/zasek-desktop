<template>
  <v-card class="new-task-form pa-3">
    <v-layout row wrap align-center>
      <v-flex xs2 md1 v-if="task.project.name">
        <span class="new-task-form__prefix">{{ task.project.prefix }} -</span>
      </v-flex>
      <v-flex xs10 md4 class="new-task-form__description-input">
        <input v-model="task.description" placeholder="Task description">
      </v-flex>
      <v-divider vertical class="mx-2"/>
      <v-flex xs6 md1>
        <v-select
          class="new-task-form__project-select"
          flat
          solo
          hide-details
          :items="projects"
          @input="(projectName) => task.project = projects.find(p => p.name === projectName)"
          item-text="name"
          label="Project"
        />
      </v-flex>
      <v-flex xs6 md2>
        <v-select
          v-model="task.tag"
          :items="tags"
          chips
          label="Tags"
          hide-details
          flat
          multiple
          solo
        />
      </v-flex>
      <v-spacer/>
      <v-divider vertical class="mx-1"/>
      <v-btn class="new-task-form__submit-button" flat>start</v-btn>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "new-task-form",
  data: () => ({
    task: {
      description: "",
      project: {},
      tag: ""
    },
    projects: [
      {
        name: "A",
        prefix: "A prefix"
      },
      {
        name: "B",
        prefix: "B prefix"
      },
      {
        name: "C",
        prefix: "C prefix"
      }
    ],
    tags: ["qwe", "asd", "zxc"]
  })
};
</script>

<style lang="scss" scoped>
@import "~styles";
.new-task-form {
  @include shadow;
  &__prefix {
    @include text-overflow;
    font-size: 20px;
    cursor: default;
  }
  &__description-input {
    input {
      @include text-overflow;
      width: 100%;
      font-size: 15px;
      outline: none;
    }

    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      left: 0;
      bottom: -10px;
    }
    &:hover::after {
      background-color: $accent;
    }
  }
  &__project-select {
    margin-top: 2px;
    min-width: 150px;
    @include text-overflow;
  }
  &__submit-button {
    min-width: 100px;
    text-transform: uppercase;
    background-color: $accent !important;
    color: $white;
    &:hover {
      background-color: $secondary !important;
    }
    &:active {
      background-color: $primary !important;
    }
  }
}
</style>