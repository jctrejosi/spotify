<template>
  <div class="leftmenu">
    <a class="leftmenu__logo">
      <spotify />
    </a>
    <ul class="leftmenu__list">
      <li
        class="leftmenu__list--item"
        :class="{ 'leftmenu__list--item-active': li1 }"
      >
        <a>
          <svg
            role="img"
            height="24"
            width="24"
            class="Svg-sc-1bi12j5-0 hDgDGI home-active-icon"
            viewBox="0 0 24 24"
            @click="change_class(1)"
          >
            <path
              d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"
            ></path>
          </svg>
          <span @click="change_class(1)">Inicio</span>
        </a>
      </li>
      <li
        class="leftmenu__list--item"
        :class="{ 'leftmenu__list--item-active': li2 }"
      >
        <a>
          <svg
            role="img"
            height="24"
            width="24"
            class="Svg-sc-1bi12j5-0 hDgDGI search-active-icon"
            viewBox="0 0 24 24"
            @click="change_class(2), Change_Show_Search(true)"
          >
            <path
              d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"
            ></path>
            <path
              d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 01-2.077 5.816l4.344 4.344a1 1 0 01-1.414 1.414l-4.353-4.353a9.454 9.454 0 01-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"
            ></path>
          </svg>
          <span @click="change_class(2), Change_Show_Search(true)">Buscar</span>
        </a>
      </li>
      <li
        class="leftmenu__list--item"
        :class="{ 'leftmenu__list--item-active': li3 }"
      >
        <a>
          <svg
            role="img"
            height="24"
            width="24"
            class="Svg-sc-1bi12j5-0 hDgDGI collection-icon"
            viewBox="0 0 24 24"
            @click="change_class(3)"
          >
            <path
              d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"
            ></path>
          </svg>
          <span @click="change_class(3)">Tu Biblioteca</span>
        </a>
      </li>
      <li
        class="leftmenu__list--item leftmenu__list--item-playlist"
        :class="{ 'leftmenu__list--item-active': li4 }"
      >
        <a>
          <svg
            role="img"
            height="12"
            width="12"
            aria-hidden="true"
            viewBox="0 0 16 16"
            class="Svg-sc-1bi12j5-0 hDgDGI"
            @click="change_class(4)"
          >
            <path
              d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"
            ></path>
          </svg>
          <span @click="change_class(4)">Crear playlist</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import spotify from "../../assets/spotifySVG.vue";
import { mapActions } from "vuex";

export default {
  name: "leftmenu",

  data() {
    return {
      li1: true,
      li2: false,
      li3: false,
      li4: false,
    };
  },

  methods: {
    ...mapActions("views_control", ["Change_Show_Search"]),

    change_class(li) {
      switch (li) {
        case 1:
          this.li1 = true;
          this.li2 = false;
          this.li3 = false;
          this.li4 = false;
          break;
        case 2:
          this.li1 = false;
          this.li2 = true;
          this.li3 = false;
          this.li4 = false;
          break;
        case 3:
          this.li1 = false;
          this.li2 = false;
          this.li3 = true;
          this.li4 = false;
          break;
        case 4:
          this.li1 = false;
          this.li2 = false;
          this.li3 = false;
          this.li4 = true;
          break;
      }
    },
  },

  components: {
    spotify,
  },
};
</script>

<style lang="scss" scoped>
.leftmenu {
  align-content: flex-start;
  align-items: flex-start;
  background-color: $bg-dark-color;
  display: flex;
  flex-wrap: wrap;
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  justify-content: flex-start;
  padding: 0 4rem 0 2rem;
  position: relative;
  width: 10rem;

  &__logo {
    height: 3rem;
    margin-top: 1rem;
    width: 100%;

    svg {
      fill: $light-color;
      height: 100%;
      width: 100%;
    }
  }

  &__list {
    list-style: none;
    width: 100%;
    padding: 0;

    &::after {
      background-color: #131313;
      content: "";
      display: flex;
      height: 0.1rem;
      margin-top: 1rem;
      width: 120%;
    }

    &--item {
      margin-top: 1rem;
      width: 100%;
      fill: $light-nearly-color;
      color: $light-nearly-color;

      a {
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 1rem;
        transition: all 0.1s;
        z-index: 1;

        &:hover {
          fill: $light-nearly-color-hover;
          color: $light-nearly-color-hover;
        }
      }

      &-playlist {
        margin-top: 3rem;

        svg {
          padding: 0.4rem;
          background-color: rgb(92, 92, 92);
        }
      }

      &-active {
        font-weight: bold;
        color: $light-color;
        fill: $light-color;
      }
    }
  }
}
</style>
