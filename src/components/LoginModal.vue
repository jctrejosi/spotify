<template>
  <form class="login-modal">
    <a class="login-modal__logo">
      <spotify />
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
      <a class="login-modal__button--login" @click="change_page()">
        Iniciar Sesión
      </a>
    </div>

    <span class="login-modal__label-checkin">¿No tienes cuenta?</span>
    <a class="login-modal__button--checkin" @click="change_page()">
      REGÍSTRARTE EN SPOTIFY
    </a>
  </form>
</template>

<script>
import spotify from "../assets/spotifySVG.vue";

export default {
  name: "Login-Modal",

  data() {
    return {
      user: "",
      password: "",
      check: false,
    };
  },

  components: {
    spotify,
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
  display: flex;
  flex-wrap: wrap;
  font-family: Arial, Helvetica, sans-serif;
  height: 25rem;
  justify-content: center;
  margin-bottom: auto;
  padding: 3rem;
  width: 25rem;

  &__logo {
    border-bottom: 0.1rem solid gainsboro;
    height: 4rem;
    padding-bottom: 1rem;
    width: 100%;

    svg {
      fill: $main-color;
      height: 100%;
      width: 100%;
    }
  }

  &__user,
  &__password {
    width: 100%;
    margin-top: 1rem;

    span {
      font-weight: bold;
    }

    input {
      font-size: 1rem;
      height: 3rem;
      margin-top: 0.5rem;
      padding-left: 1rem;
      width: 100%;
    }
  }

  &__label {
    &-check,
    &-checkin {
      font-weight: bold;
      margin: 1rem 0;
      width: 100%;
    }

    &-checkin {
      text-align: center;
      border-top: 0.1rem solid gainsboro;
      padding-top: 3rem;
    }
  }

  &__footer {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  &__button {
    &--login {
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

    &--checkin {
      align-items: center;
      background-color: transparent;
      border: 0.1rem solid $medium-color;
      color: $medium-color;
      border-radius: 4rem;
      cursor: pointer;
      display: flex;
      height: 3rem;
      justify-content: center;
      padding: 0 3rem;
      text-transform: uppercase;

      &:hover {
        border-color: $dark-color;
      }
    }
  }
}
</style>
