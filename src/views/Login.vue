<template>
  <div class="login-page">
    <LoginModal />
  </div>
</template>

<script>
import LoginModal from "../components/LoginModal.vue";
export default {
  name: "Login",

  components: {
    LoginModal,
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}
</style>
