<template>
  <nav>
    <ul>
      <li v-if="parent">
        <a href="#" v-on:click="logout">Logg ut</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    parent: String
  },
  methods: {
    logout() {
      this.$emit("logout");
    }
  }
}
</script>

<style scoped lang="scss">
  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 8px 16px;
    background-color: #417977;
    margin-bottom: 12px;
    min-height: 40px;
  }

  ul {
    list-style: none;
    margin-bottom: 0;
  }

  a {
    cursor: pointer;
    color: white;

    &:hover {
      color: white;
      text-decoration: none;
    }
  }
</style>


