<template>
  <div id="app">
    <Navbar
      v-bind:user="user"
      v-on:logout="logout"
    />
    <div class="alert alert-danger" v-if="errorMsg" role="alert">
      {{errorMsg}}
    </div>
    <Login
      v-if="!user" v-on:setUser="setUser"
      v-on:error="onError"
    />
    <div v-if="children.length > 0" class="child-container">
      <div class="child-wrapper" v-for="child in children" v-bind:key="child.id">
        <Child v-bind:child="child" />
      </div>
    </div>

    <div v-if="plannings.length > 0">
      <PlanningDays v-bind:days="plannings" />
    </div>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Navbar from './components/Navbar.vue'
import Child from './components/Child.vue'
import PlanningDays from "./components/PlanningDays.vue"

import axios from "axios"

const MYKID_COOKIE = "mykid";

export default {
  name: 'app',
  components: {
    Login,
    Child,
    Navbar,
    PlanningDays
  },
  data: function() {
    return {
      user: null,
      children: [],
      plannings: [],
      errorMsg: null
    }
  },
  methods: {
    setUser(data) {
      this.user = data;
      const jsonData = JSON.stringify(Object.assign({}, data));
      $cookies.set(MYKID_COOKIE, jsonData, 60*60*24*30, "/");
    },
    logout() {
      this.user = null;
      this.children = [];
      this.plannings = [];
      this.errorMsg = null;
      $cookies.remove(MYKID_COOKIE)
    },
    onError(errorMsg) {
      this.errorMsg = errorMsg;
    }
  },
  created() {
    const cookieData = $cookies.get(MYKID_COOKIE);
    if (cookieData) {
      this.user = cookieData;
    }
  },
  watch: {
    user: function(newVal, oldVal) {
      if (newVal && oldVal === null) {
        axios.get("/api/children")
          .then(res => this.children = res.data)
          .catch(err => this.errorMsg = err)
      }
    },
    children: function(newVal, oldVal) {
      if (newVal.length > 0 && oldVal.length === 0) {
        const childId = newVal[0].id
        const date = new Date()
        axios.get("/api/plannings", {
          params: {
            child_id: childId,
            date: date.toISOString().substring(0, 10)
          }
        })
          .then(res => {
            this.plannings = res.data.planning_days
          })
          .catch(err => this.errorMsg = err)
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  h2 {
    text-transform: uppercase;
    font-size: 20px;
    color: #333;
    line-height: 1;
    letter-spacing: -0.01562em;
    padding-bottom: 12px;
  }
}

.child-container {
  display: flex;

}

.child-wrapper {
  flex: 1;
}

body {
  background-color: #fff;
  font-family: Roboto;
}

</style>
