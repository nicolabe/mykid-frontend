<template>
  <nav>
    <ul>
      <li v-if="parent">
        <a href="#" v-on:click="logout">Log out</a>
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
    padding-right: 16px;
  }

  ul {
    list-style: none;
  }

  a {
    cursor: pointer;
  }
</style>


