<template>
  <div class="child-container">
    <h1 class="child-header">{{child.name}}</h1>
    <div class="child-info">
      <div class="child-image">
        <img v-bind:src="child.img" v-bind:alt="child.name" height="150" width="150">
      </div>
      <div class="info-box">
        <span>Bursdag: {{formatBirthday}}</span>
        <span>Avdeling: {{child.department.name}}</span>
        <span>Telefon: {{child.department.phone}}</span>
      </div>
    </div>
    <div class="child-myday" v-if="Object.keys(myDay).length > 0">
      <MyDay v-on:changeDay="changeDay" v-bind:myDay="myDay" v-bind:childId="child.id"/>
    </div>
    <Postits v-bind:postits="postits"/>
  </div>
</template>

<script>
import axios from "axios";
import MyDay from "./MyDay.vue";
import Postits from "./Postits.vue";
import { formatDate } from "../utils/helpers.js";

export default {
  components: {
    MyDay,
    Postits
  },
  props: {
    child: Object
  },
  data: function() {
    return {
      myDay: {},
      postits: []
    };
  },
  methods: {
    changeDay(day) {
      this.myDay = day;
    },
    async getMyDay() {
      const date = new Date();
      const { data } = await axios.get("/api/my_day", {
        params: {
          child_id: this.child.id,
          date: date.toISOString().substring(0, 10)
        }
      });
      this.myDay = data;
    },
    async getPostits() {
      const { data } = await axios.get("/api/postits", {
        params: {
          child_id: this.child.id
        }
      });
      this.postits = data.postits;
    }
  },
  computed: {
    formatBirthday() {
      return formatDate(this.child.birthday);
    }
  },
  created() {
    this.getMyDay();
    this.getPostits();
  }
};
</script>

<style scoped lang="scss">
.child-header {
  font-weight: bold;
  font-size: 26px;
  padding-bottom: 16px;
  text-transform: uppercase;
}

.child-container {
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.child-info {
  display: flex;
  flex-direction: row;
  flex: 1;
  padding-bottom: 20px;

  @media (max-width: $mobile-size) {
    flex-direction: column;
  }
}

.child-image {
  flex: 1;

  @media (max-width: $mobile-size) {
    padding-bottom: 12px;
  }
}

.info-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $primary-color;
  color: $invert-text-color;
  font-size: 24px;
}
</style>


