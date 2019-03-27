<template>
  <form v-on:submit.prevent="onSubmit">
    <label>
      <span>Mobilnummer</span>
      <input type="text" v-model="number" />
    </label>
    <label>
      <span>Passord</span>
      <input type="password" v-model="password" />
    </label>
    <button :disabled="loading" type="submit">Logg inn</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data: function() {
    return {
      number: "",
      password: "",
      loading: true
    }
  },
  methods: {
    onSubmit() {
      this.loading = true;
      axios.post("/api/login", {
        mykid_username: "40469957",
        mykid_password: "hkbsb4",
        mykid_submit: "Logg inn"
      }).then(response => {
        this.loading = false;
        this.$emit("setUser", response.data.user);
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
      color: #333;

      span {
        font-weight: 300;
        padding-bottom: 4px;
      }
    }

    button {
        background-color: #2196f3;
        color: #fff;
        padding: 6px 16px;
        min-width: 64px;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        line-height: 1.75;
        font-weight: 500;
        border-radius: 4px;
        text-transform: uppercase;
        letter-spacing: 0.02857em;
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
        border: 0;
        cursor: pointer;

        &:hover {
          background-color: #1976d2;
        }
      }
  }
</style>
