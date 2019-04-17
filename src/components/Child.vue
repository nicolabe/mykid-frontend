<template>
  <div class="child-container">
    <div class="child-info">
      <p><img v-bind:src="child.img" v-bind:alt="child.name" height="50" width="50"></p>
      <p class="name">{{child.name}}</p>
      <p>Bursdag: {{child.birthday}}</p>
      <h4>Avdeling</h4>
      <p>{{child.department.name}}</p>
      <p>Telefon {{child.department.phone}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  props: {
    child: Object
  },
  async created() {
    const res = await axios.get("/api/my_day", {
      params: {
        child_id: this.child.id
    }})
    console.log(res)
  }
}
</script>

<style scoped lang="scss">
  h4 {
    font-weight: 300;
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

  .name {
    font-weight: bold;
  }
</style>


