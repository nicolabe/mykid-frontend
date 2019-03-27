<template>
  <div id="app">
    <Navbar
      v-bind:parent="parent"
      v-on:logout="logout"
    />
    <h1>Mykid</h1>
    <Login v-if="!parent" v-on:setUser="setUser" />
    <MyDay
      v-if="parent"
      v-bind:parent="parent"
      v-bind:child="child"
    />
  </div>
</template>

<script>
import Login from './components/Login.vue'
import MyDay from './components/MyDay.vue'
import Navbar from './components/Navbar.vue'

const MYKID_COOKIE = "mykid_login";

export default {
  name: 'app',
  components: {
    Login,
    MyDay,
    Navbar
  },
  data: function() {
    return {
      parent: null,
      child: null
    }
  },
  methods: {
    setUser(userData) {
      this.parent = userData.parent;
      this.child = userData.child;
      $cookies.set(MYKID_COOKIE, userData, 60*60*24*30, "/");
    },
    logout() {
      this.parent = null;
      this.child = null;
      $cookies.remove(MYKID_COOKIE)
    }
  },
  created() {
    const cookieData = $cookies.get(MYKID_COOKIE);
    if (cookieData) {
      this.parent = cookieData.parent;
      this.child = cookieData.child;
    }
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

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
