<template>
  <div>
    <div class="container-fluid" id="nav">
      <div @click="toggleNewUserForm" class="app-btn" ref="new-user-form-btn">Add New User</div>
      <div @click="toggleDropdown" class="app-btn" ref="sort-dropdown-btn">Sort Users</div>
    </div>
    <div class="container">
      <the-new-user-form :newUserFormOpen="newUserFormOpen"></the-new-user-form>
      <the-sorting-section :sortSectionOpen="sortSectionOpen"></the-sorting-section>
    </div>
  </div>
</template>

<script>
import TheSortingSection from './TheSortingSection.vue'
import TheNewUserForm from './TheNewUserForm.vue'

export default {
  name: 'TheHeader',
  components: {
    TheSortingSection,
    TheNewUserForm
  },
  data: function () {
    return {
      sortSectionOpen: false,
      newUserFormOpen: false
    }
  },
  methods: {
    toggleDropdown () {
      this.sortSectionOpen = !this.sortSectionOpen
    },
    toggleNewUserForm () {
      this.newUserFormOpen = !this.newUserFormOpen
    }
  }
}
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #240090;
  height: 8vh;
  z-index: 999;
}

/* .animate {
  animation-name: slide-down;
  animation-duration: .5s;
  animation-fill-mode: forwards;
}

@keyframes slide-down {

  from {
    margin-top: 0;
    opacity: 0;
  }

  20% {
    margin-top: 1.5vh;
  }

  40% {
    margin-top: 3.5vh;
    opacity: 0.25;
  }

  60% {
    margin-top: 5vh;
    opacity: 0.5;
  }

  80% {
    margin-top: 6.5vh;
    opacity: .75;
  }

  to {
    margin-top: 8vh;
    opacity: 1;
  }
} */
</style>
