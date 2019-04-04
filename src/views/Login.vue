<template>
  <v-layout 
    row wrap
    justify-center align-center
  >
    <login-form />
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
