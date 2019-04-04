<template>
  <v-layout row wrap align-center>
    <pre class="white--text">{{ user.login }}</pre>

    <v-avatar
      color="white"
      class="mx-3"
    >
      <img :src="userAvatar" alt="avatar">
    </v-avatar>

    <v-btn
      class="accent py-1" 
      flat
      @click="onLogout()"
    >
      Logout
    </v-btn>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user']),
    userAvatar() {
      const { avatarUrl } = this.user
      const defaultAvatarUrl = 'https://minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg'
      return avatarUrl ? avatarUrl : defaultAvatarUrl
    },
  },
  methods: {
    async onLogout() {
      await this.$store.dispatch('logout')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>

</style>
