<template>
  <div>
    <nav class="navbar bg-white p-3 shadow-sm">
      <div class="container">
        <a class="navbar-brand"></a>
        <div class="d-flex">
          <button @click="toggleNewUserForm" class="btn btn-primary me-2" ref="new-user-form-btn"><b-icon-plus-circle></b-icon-plus-circle> New User</button>
          <button @click="toggleDropdown" class="btn btn-outline-primary" ref="sort-dropdown-btn"> <b-icon-sort-alpha-down></b-icon-sort-alpha-down> Sort List</button>
        </div>
      </div>
    </nav>
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
