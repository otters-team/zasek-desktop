<template>
  <v-card class="pa-5">
    <v-layout column align-center>
      <h2> Register Form </h2>

      <v-form :ref="formRef" class="my-5">
        <v-text-field
          v-model="username"
          autocomplete="username"
          :rules="usernameRules"
          label="Username"
          required
          @focus="resetValidation()"
        />
        <v-text-field
          v-model="email"
          autocomplete="email"
          :rules="emailRules"
          label="Email"
          @focus="resetValidation()"
        />
        <v-text-field
          v-model="password"
          type="password"
          autocomplete="new-password"
          :rules="passwordRules"
          label="Password"
          required
          @focus="resetValidation()"
        />
        <v-text-field
          v-model="passwordConfirmation"
          type="password"
          autocomplete="new-password"
          :rules="passwordConfirmationRules"
          label="Password confirmation"
          required
          @focus="resetValidation()"
        />
      </v-form>

      <v-btn
        block
        class="accent"
        :loading="isLoading"
        @click="onRegister()"
      >
        sign up
      </v-btn>

      <v-btn
        block outline
        @click="onLogin()"
      >
        sign in 
      </v-btn>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () =>({
    errors: [],
    isLoading: false,
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }),
  computed: {
    formRef: () => 'registerForm',
    usernameRules: () => [
      v => !!v || 'Enter your username',
      v => (v && v.length <= 150) || 'Name must be less than 150 characters',
      v => (v && v.length > 1) || 'Name must be more than 1 characters'
    ],
    emailRules: () => [
      v => /.+@.+/.test(v) || 'Email must be valid'
    ],
    passwordRules: () => [
      v => !!v || 'Enter password',
      v => (v && v.length > 1) || 'Password must be more than 1 characters'
    ],
    passwordConfirmationRules() {
      return [
        v => !!v || 'Enter password a second time',
        v => v === this.password ||  'Passwords do not match',
      ]
    },
    isFormValid() {
      const form = this.$refs[this.formRef]
      return form ? form.validate() : false
    },
  },
  methods: {
    resetValidation () {
      this.$refs[this.formRef].resetValidation()
    },
    async onRegister() {
      if(!this.isFormValid) return
      
      this.isLoading = true

      const registerFormData = {
        username: this.username,
        email: this.email,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
      }

      this.$store
        .dispatch('register', registerFormData)
        .then(response => {
          this.$router.push({ path: '/' })
        })
        .catch(error => {
          // TODO: handle 'username/email' already used e.t.c.
        })
    },
    onLogin() {
      this.$router.push({ name: 'login' })
    }
  },
}
</script>

