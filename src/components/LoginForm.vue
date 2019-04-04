<template>
  <v-card class="pa-5">
    <v-layout column align-center>
      <h2> Login Form </h2>

      <v-form ref="loginForm" class="my-5">
        <v-text-field
          v-model="login"
          autocomplete="username"
          :rules="loginRules"
          label="Login"
          required
        />
        <v-text-field
          v-model="password"
          type="password"
          autocomplete="current-password"
          :rules="passwordRules"
          label="Password"
          required
        />
      </v-form>

      <v-btn
        block
        class="accent"
        :loading="isLoading"
        @click="onLogin()"
      >
        sign in 
      </v-btn>

      <v-btn
        block outline
        @click="onRegister()"
      >
        sign up
      </v-btn>

    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () =>({
    isLoading: false,
    login: '',
    password: '',
  }),
  computed: {
    loginRules: () => [
      v => !!v || 'Enter your login',
    ],
    passwordRules: () => [
      v => !!v || 'Enter your password',
    ],
    isFormValid() {
      const form = this.$refs.loginForm
      return form ? form.validate() : false
    },
  },
  methods: {
    async onLogin() {
      if(!this.isFormValid) return
      
      this.isLoading = true

      const loginFormData = {
        login: this.login,
        password: this.password,
      }

      await this.$store.dispatch('login', loginFormData)
      this.$router.push({ path: '/' })
    },
    onRegister() {
      this.$router.push({ name: 'register' })
    }
  },
}
</script>

