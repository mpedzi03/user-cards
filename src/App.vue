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

<style>
#app {
  font-family: 'Snell Roundhand',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html body {
  background-color: #000000;
  color: #ffffff;
}

.app-btn {
  border: 1.5px solid #ffffff;
  background-color: #282828;
  border-radius: 2px;
  padding: 10px 20px;
  color: #ffffff;
  font-weight: bold;
}

.app-btn:hover {
  background-color: #424242;
  cursor: pointer;
}

.app-btn:active {
  background-color: #242424;
  color: #ffffff;
}

.new-user-form h2, .sort-dropdown h2 {
  font-weight: bold;
  text-align: center;
}
</style>
