<template>
  <div class="loginContainer">
    <form v-on:submit.prevent="onSubmit" v-bind:class="{isLoading: loading}">
      <label>
        <span>Mobilnummer</span>
        <input type="text" v-model="number" />
      </label>
      <label>
        <span>Passord</span>
        <input type="password" v-model="password" />
      </label>
      <button class="btn btn-primary" :disabled="loading" type="submit">Logg inn</button>
    </form>
    <pacman-loader :loading="loading" color="#007bff" class="centerPosition" />
  </div>
</template>

<script>
import axios from "axios";
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'

export default {
  name: 'Login',
  components: {
    PacmanLoader
  },
  data: function() {
    return {
      number: "",
      password: "",
      loading: false
    }
  },
  methods: {
    onSubmit() {
      this.loading = true;
      axios.post("/api/login", {
        country_code: "+47",
        mobile: "40469957",
        password: "hkbsb4",
        v: "1.6.7+"
      }).then(response => {
        this.loading = false;
        this.$emit("setUser", response.data.user);
      }).catch(error  => {
        this.loading = false;
        this.$emit("error", error);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding-bottom: 12px;
      color: $text-color;

      span {
        font-weight: 300;
        padding-bottom: 4px;
      }
    }
  }

  .isLoading {
    opacity: 0.5;
  }

  .loginContainer {
    position: relative;
  }

  .centerPosition {
    position: absolute !important;
    top: 50px;
    left: 45%;
  }
</style>
