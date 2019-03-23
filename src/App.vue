<template>
  <div id="app">
    <h1>Mykid</h1>
    <Login/>
  </div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  border: 2px solid #ccc;
  padding: 32px 0;
  width: 75%;
  margin: auto;

  h1 {
    text-transform: uppercase;
    font-size: 24px;
    color: #333;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.01562em;
    padding-bottom: 12px;
  }
}

body {
  background-color: #fff;
  font-family: Roboto;
}

</style>
