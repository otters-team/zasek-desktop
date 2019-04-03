<template>
  <v-layout 
    row wrap
    justify-center align-center
  >
    <v-flex xs10 sm8 md6 lg4>
      <login-form />
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
