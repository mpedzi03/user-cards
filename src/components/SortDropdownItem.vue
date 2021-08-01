<template>
  <div @click="sort">{{title}}</div>
</template>

<script>
export default {
  name: 'SortDropdownItem',
  props: {
    title: String,
    type: String
  },
  methods: {
    sort () {
      this.$store.dispatch('users/sortUsers', this.type)
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: #1f356e;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 5px;
}

div:hover {
  background-color: #3500D3;
}

div:active {
  background-color: #1f356e;
}
</style>
