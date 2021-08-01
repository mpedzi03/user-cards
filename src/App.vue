<template>
  <div id="app">
    <the-header></the-header>

    <div class="container">
      <user v-for="user in users" :key="user.id" :user="user"></user>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

import User from './components/User.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    User
  },
  data: function () {
    return {}
  },
  created () {
    this.$store.dispatch('users/retrieveUsers')
      .then(resp => {
        console.log(resp)
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    users () {
      return this.$store.getters['users/userList']
    }
  }
}
</script>
