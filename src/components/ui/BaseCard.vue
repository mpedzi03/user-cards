<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.user-section {
  transition: .15s;
}

.user-section:hover {
  transform: scale(1.02);
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
}

@media only screen and (max-width: 575px) {
  .user-section {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
