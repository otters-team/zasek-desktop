<template>
  <v-layout
    row
    wrap
    justify-end
  >
    <v-flex
      xs12
      md6
      align-content-center
    >
      <v-layout
        column
        align-center
        justify-center
      >
        <login-form class="my-5" />
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  components: {
    LoginForm,
  },
}
</script>
