<template>
  <v-card class="new-task-form pa-3">
    <v-layout
      row
      wrap
      align-center
    >
      <v-flex
        xs12
        md4
        class="new-task-form__description-input"
      >
        <v-layout row>
          <span
            v-if="task.project.name"
            class="new-task-form__prefix pr-2"
          >{{ task.project.prefix }} -</span>
          <input
            v-model="task.description"
            placeholder="Task description"
          >
        </v-layout>
      </v-flex>
      <v-divider
        vertical
        class="mx-2 hidden-sm-and-down"
      />
      <v-layout
        row
        wrap
      >
        <v-select
          class="new-task-form__project-select"
          flat
          solo
          chips
          hide-details
          :items="projects"
          item-text="name"
          label="Project"
          @input="(projectName) => task.project = projects.find(
            (p) => p.name === projectName
          )"
        >
          <template
            slot="selection"
            slot-scope="{ item }"
          >
            <v-chip
              class="new-task-form__select-chip"
              dark
            >
              <span class="new-task-form__select-chip-content">
                {{ item.name }}
              </span>
            </v-chip>
          </template>
        </v-select>
        <v-select
          v-model="task.tags"
          class="new-task-form__tag-select"
          :items="tags"
          chips
          label="Tags"
          hide-details
          flat
          multiple
          solo
        >
          <template
            slot="selection"
            slot-scope="{ item, index }"
          >
            <v-chip
              v-if="index === 0"
              class="new-task-form__select-chip"
              dark
            >
              <span class="new-task-form__select-chip-content">
                {{ item }}
              </span>
            </v-chip>
            <span
              v-if="index === 1"
              class="caption"
            >(+{{ task.tags.length - 1 }} other)</span>
          </template>
        </v-select>
      </v-layout>
      <v-divider
        vertical
        class="mx-2 hidden-sm-and-down"
      />
      <v-spacer />
      <v-icon class="new-task-form__timer-form-icon">
        timer
      </v-icon>
      <v-spacer />
      <v-divider
        vertical
        class="mx-2 hidden-sm-and-down"
      />
      <v-btn
        class="new-task-form__submit-button"
        flat
      >
        start
      </v-btn>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'NewTaskForm',
  data: () => ({
    task: {
      description: '',
      project: {},
      tags: [],
    },
    projects: [
      {
        name: 'A',
        prefix: 'A prefix',
      },
      {
        name: 'B',
        prefix: 'B prefix',
      },
      {
        name: 'C',
        prefix: 'C prefix',
      },
    ],
    tags: ['qwe', 'asd', 'fghsd', '12345', 'fghfghgh', 'wefdwesdsdsdsddwe',],
  }),
}
</script>

<style lang="scss" scoped>
@import "~styles";
.new-task-form {
  @include shadow;

  border-radius: $border-radius;

  &__prefix {
    white-space: nowrap;
    font-size: 20px;
    cursor: default;
  }
  &__description-input {
    input {
      padding: 0 12px;
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
  &__select-chip {
    &-content {
      max-width: 90px;
      @include text-overflow;
    }
  }
  &__project-select {
    @include text-overflow;
    max-width: 180px;
  }
  &__tag-select {
    max-width: 250px;
  }
  &__timer-form-icon {
    @include pulse();
    cursor: pointer;
    font-size: 40px;
    color: $primary;
  }
  &__submit-button {
    min-width: 100px;
    text-transform: uppercase;
    background-color: $accent !important;
    color: $white;
    float: right;
    &:hover {
      background-color: $secondary !important;
    }
    &:active {
      background-color: $primary !important;
    }
  }
}
</style>