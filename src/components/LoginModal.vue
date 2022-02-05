<template>
  <form class="login-modal">
    <a class="login-modal__logo">
      <img src="@/assets/spotify.svg" />
    </a>

    <label for="user" class="login-modal__user">
      <span>Correo electrónico o nombre de usuario</span>
      <input placeholder="User" v-model="user" type="email" />
    </label>

    <label for="password" class="login-modal__password">
      <span>Contraseña</span>
      <input placeholder="Password" v-model="password" type="password" />
    </label>

    <span class="login-modal__label-check">¿Has olvidado tu contraseña?</span>

    <div class="login-modal__footer">
      <label for="password" class="login-modal__checkbox">
        <input v-model="check" checked="checked" type="checkbox" />
        <span>Recordarme</span>
      </label>
      <a class="login-modal__button" @click="change_page()">Iniciar Sesión</a>
    </div>
  </form>
</template>

<script>
export default {
  name: "Login-Modal",

  data() {
    return {
      user: "",
      password: "",
      check: false,
    };
  },

  props: {
    page: {
      default: "/main",
      type: String,
    },
  },

  methods: {
    change_page() {
      this.$router.push(this.page);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-modal {
  align-items: center;
  border-left: 0.1rem solid black;
  border-right: 0.1rem solid black;
  display: flex;
  flex-wrap: wrap;
  font-family: Arial, Helvetica, sans-serif;
  height: 25rem;
  justify-content: center;
  padding: 3rem;
  width: 25rem;

  &__logo {
    border-bottom: 0.1rem solid gainsboro;
    height: 4rem;
    padding-bottom: 1rem;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
    }
  }

  &__user,
  &__password {
    width: 100%;

    span {
      font-weight: bold;
    }

    input {
      height: 3rem;
      margin-top: .5rem;
      padding-left: 1rem;
      width: 100%;
    }
  }

  &__label-check {
    width: 100%;
  }

  &__footer {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  &__button {
    align-items: center;
    background-color: $main-color;
    border-radius: 4rem;
    cursor: pointer;
    display: flex;
    font-weight: bold;
    height: 3rem;
    justify-content: center;
    padding: 0 3rem;
    text-transform: uppercase;
  }
}
</style>
