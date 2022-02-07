<template>
  <div class="main-container">
    <LeftMenu />
    <Search v-if="showSearch" />
    <div class="content-views">Container</div>
  </div>
</template>

<script>
import LeftMenu from "../components/LeftMenu/LeftMenu.vue";
import Search from "../components/Search.vue";
import { mapState } from "vuex";

export default {
  name: "MainPage",

  components: {
    LeftMenu,
    Search,
  },

  computed: {
    ...mapState("views_control", ["showSearch"]),
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  background-color: $bg-dark-nearly-color;
  height: 100%;
  width: 100%;
}

.content-views {
  align-items: center;
  display: flex;
  height: 75%;
  justify-content: center;
  left: 20rem;
  position: absolute;
  top: 6rem;
  width: 70%;
}
</style>
