<template>
  <div class="my-day">
    <div class="date-container">
      <a v-on:click="previousDay">
        &lt&lt
      </a>
      <h3 class="day-header">Dagen i dag {{today}}</h3>
      <a v-bind:class="{ disabled: isToday }" v-on:click="nextDay">&gt&gt</a>
    </div>
    <div v-if="myDay.daily_messages && myDay.daily_messages.length > 0" class="events">
      <p class="sleep">
        Sovet: {{sleepMessage}}
      </p>
      <p>{{dailyMessage}}</p>
    </div>
    <div class="arrival" v-if="myDay.pickup">
      <p>Levert: {{myDay.pickup.arrived_at.substring(11,16)}}</p>
      <p v-if="myDay.pickup.left_at">Hentet: {{myDay.pickup.left_at.substring(11,16)}}</p>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../utils/helpers.js"
import { isToday } from "../utils/helpers.js"

export default {
  name: 'MyDay',
  props: {
    myDay: Object
  },
  methods: {
    previousDay() {
      console.log("get previous day");
      console.log(this.myDay)
      console.log(isToday(this.myDay.date))
    },
    nextDay() {
      if (this.isToday) {
        return;
      }
      console.log("get next day");
    }
  },
  computed: {
    sleepMessage: function() {
      const message = this.myDay.daily_messages.filter(message => message.msg_type === "sleep")[0];
      return message.content;
    },
    dailyMessage: function() {
      const messages = this.myDay.daily_messages.filter(message => message.msg_type === "daily")
      return messages.map(message => message.content.replace(/(<([^>]+)>)/ig,"").replace(/&nbsp;/g, ' ')).join(", ")
    },
    today: function() {
      const date = new Date()
      return formatDate(date.toISOString().substring(0, 10))
    },
    isToday: function() {
      return isToday(this.myDay.date)
    }
  }
}
</script>

<style scoped lang="scss">
  .date-container {
    padding: 0 32px;
    display: flex;
    justify-content: space-between;

    a {
      cursor: pointer;
    }
  }

  .day-header {
    font-size: 20px;
    font-weight: bold;
  }

  .my-day {
    border: 2px solid $primary-color;
    padding: 22px;
  }

  .sleep {
    font-weight: bold;
  }

  .disabled {
    color: #bbb !important;
    cursor: default !important;
  }
</style>
