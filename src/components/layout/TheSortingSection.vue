<template>
  <div @transitionend="removeTransitionClass" class="sort-dropdown" ref="sort-dropdown">
    <h2>Choose a Sort Type</h2>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <sort-dropdown-item
          v-for="sortingType in sortingTypes"
          :key="sortingType.type"
          :title="sortingType.title"
          :type="sortingType.type"
        ></sort-dropdown-item>
      </div>
    </div>
  </div>
</template>

<script>
import SortDropdownItem from '../SortDropdownItem.vue'

export default {
  name: 'TheSortingSection',
  props: {
    sortSectionOpen: Boolean
  },
  components: {
    SortDropdownItem
  },
  watch: {
    sortSectionOpen: function (newVal, oldVal) {
      this.openSortDropdown()
    }
  },
  data: function () {
    return {}
  },
  computed: {
    sortingTypes () {
      return this.$store.getters['users/sortingTypes']
    }
  },
  mounted () {
    document.addEventListener('click', this.checkIfClickOutsideDropdown)
  },
  methods: {
    removeTransitionClass () {
      this.$refs['sort-dropdown'].classList.remove('dropdown-transition', 'dropdown-visible', 'dropdown-hidden')
    },
    openSortDropdown () {
      this.$refs['sort-dropdown'].classList.contains('dropdown-active')
        ? this.hideDropdown()
        : this.showDropdown()
    },
    checkIfClickOutsideDropdown (e) {
      const isClickInsideDropdown = this.$refs['sort-dropdown'].contains(e.target)
      const isDropdownActive = this.$refs['sort-dropdown'].classList.contains('dropdown-active')
      const isClickOffDropdownBtn = this.$parent.$refs['sort-dropdown-btn'] && !this.$parent.$refs['sort-dropdown-btn'].contains(e.target)

      if (!isClickInsideDropdown && isDropdownActive && isClickOffDropdownBtn) this.hideDropdown()
    },
    hideDropdown () {
      const dropdown = this.$refs['sort-dropdown']
      dropdown.classList.remove('dropdown-active')
      dropdown.classList.add('dropdown-transition', 'dropdown-hidden')
    },
    showDropdown () {
      const dropdown = this.$refs['sort-dropdown']
      dropdown.classList.add('dropdown-visible')
      dropdown.clientWidth // eslint-disable-line
      dropdown.classList.add('dropdown-transition', 'dropdown-active')
    }
  }
}
</script>

<style scoped>
.sort-dropdown {
  padding: 15px 20px;
  margin: 15px 20px;
  display: none;
  opacity: 0;
}

.dropdown-visible {
  display: block;
}
.dropdown-active {
  display: block;
  opacity: 1;
}
.dropdown-transition.dropdown-visible {
  display: block;
  opacity: 1;
}
.dropdown-transition {
  transition: opacity 0.5s ease;
}
.dropdown-hidden {
  display: block;
  opacity: 0;
}
</style>
