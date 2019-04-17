<template>
  <nav>
    <h1>Mykid</h1>
    <ul>
      <li v-if="user">
        <a href="#" v-on:click="logout">Logg ut</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    user: Object
  },
  methods: {
    logout() {
      this.$emit("logout");
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 24px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    background-color: #417977;
    margin-bottom: 24px;
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


