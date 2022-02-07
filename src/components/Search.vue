<template>
  <div class="search">
    <label for="user" class="search__label">
      <input
        class="search__input"
        placeholder="Artistas, canciones o podcasts"
        v-model="search"
        type="text"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "Search",

  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  width: 20rem;
  padding: 0 2rem;
  position: absolute;
  top: 0;
  left: 15rem;
  height: 4rem;

  &__label {
    height: 60%;
    width: 100%;
  }

  &__input {
    border-radius: 2rem;
    background-image: url("search.svg");
    background-repeat: no-repeat;
    background-position: 4px center;
    background-size: 20px;
    padding: 0 2rem;
    border: 0.1rem solid $dark-color;
    height: 100%;
    width: 100%;
  }
}
</style>
