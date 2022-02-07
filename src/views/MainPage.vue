<template>
  <div class="main-container">
    <LeftMenu />
    <Search />
  </div>
</template>

<script>
import LeftMenu from "../components/LeftMenu/LeftMenu.vue";
import Search from "../components/Search.vue";

export default {
  name: "MainPage",

  components: {
    LeftMenu,
    Search,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: $bg-dark-nearly-color;
}
</style>
