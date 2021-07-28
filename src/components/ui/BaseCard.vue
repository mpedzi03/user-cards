<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.user-section {
  border: 2px ridge #ffffff;
  border-radius: 6px;
  background-color: #240090;
  margin-top: 15px;
  padding: 15px 10px;
  color: white;
  transition: .15s;
}

.user-section:hover {
  transform: scale(1.02);
}

.user-info-heading {
  text-decoration: underline;
}
.personal-info-section {
  padding-top: 20px;
  padding-bottom: 20px;
}

.other-info-section {
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

@media only screen and (max-width: 575px) {
  .user-section {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
