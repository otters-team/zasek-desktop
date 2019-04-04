<template>
  <v-card>
    <v-container>
      <v-layout column align-center>
        <h2> Login Form </h2>

        <div class="my-3">
          <!-- // TODO: inputs -->
        </div>

        <v-btn
          class="accent"
          :loading="isLoading"
          @click="onLogin()"
        >
          Login
        </v-btn>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () =>({
    isLoading: false,
    login: 'hardcode login from login form',
    email: 'hardcode email from login form',
  }),
  methods: {
    async onLogin() {
      // TODO: vulidate or vuetify form data validation
      const isFormValid = true

      if(!isFormValid) return
      
      this.isLoading = true

      const loginFormData = {
        login: this.login,
        email: this.email,
      }

      await this.$store.dispatch('login', loginFormData)

      const redirectUrl = (this.$router.query || {}).redirect
      const nextUrl = redirectUrl ? redirectUrl : '/'

      this.$router.push({ path: nextUrl })
    }
  }
}
</script>

