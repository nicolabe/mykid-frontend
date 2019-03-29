<template>
  <div>
    Gratulerer {{parent}}, du er logget inn!
    <p>Barnet ditt heter {{child}}</p>

    <div v-if="myDay">
      <h2>Dagen i dag {{this.date}}</h2>
      <p>{{myDay}}</p>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'MyDay',
  props: {
    parent: String,
    child: String
  },
  data: function() {
    return {
      myDay: null,
      date: ""
    }
  },
  created() {
    const date = new Date();
    this.date = "2019-03-19 00:00:00";
    axios.get("/api/my_day", {
      params: {
        date: this.date
      }
    }).then(res => {
      console.log(res.data);
      this.myDay = res.data;
    }).catch(error => this.$emit("error", "Noe gikk galt, prøv å logg ut og inn igjen"));
  }
}
</script>

<style scoped lang="scss">
</style>
