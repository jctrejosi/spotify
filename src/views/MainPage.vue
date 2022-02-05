<template>
  <div class="main-container">
    <LeftMenu />
  </div>
</template>

<script>
import LeftMenu from "../components/LeftMenu/LeftMenu.vue";

export default {
  name: "MainPage",

  components: {
    LeftMenu,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  background-color: $bg-dark-nearly-color;
}
</style>
