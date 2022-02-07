<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",

  methods: {
    ...mapActions("users", ["Get_Token"]),
  },

  created() {
    this.Get_Token();
  },
};
</script>

<style lang="scss">
@import "./assets/fonts/fonts.css";

html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>
