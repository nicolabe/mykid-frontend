<template>
  <div class="child-container">
    <div class="child-info">
      <p><img v-bind:src="child.img" v-bind:alt="child.name" height="50" width="50"></p>
      <h4>{{child.name}}</h4>
      <p>Bursdag: {{child.birthday}}</p>
      <h4>Avdeling</h4>
      <p>{{child.department.name}}</p>
      <p>Telefon: {{child.department.phone}}</p>
      <div v-if="Object.keys(myDay).length > 0">
        <MyDay v-bind:myDay="myDay" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import MyDay from "./MyDay.vue"

export default {
  components: {
    MyDay
  },
  props: {
    child: Object
  },
  data: function() {
    return {
      myDay: {}
    }
  },
  async created() {
    const { data } = await axios.get("/api/my_day", {
      params: {
        child_id: this.child.id
    }})
    this.myDay = data;
  }
}
</script>

<style scoped lang="scss">
  h4 {
    font-weight: bold;
    font-size: 22px;
  }

  .child-container {
    flex: 1;
    border: 2px solid #ccc;
    margin: 20px;
    padding: 20px;
  }

  .child-info {
    display: flex;
    flex-direction: column;
  }

</style>


