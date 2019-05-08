<template>
  <div class="my-day">
    <div class="date-container">
      <span>
        &lt&lt
      </span>
      <h3 class="day-header">Dagen i dag {{today}}</h3>
      <span>&gt&gt</span>
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
import {formatDate} from "../utils/helpers.js"

export default {
  name: 'MyDay',
  props: {
    myDay: Object
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
    }
  }
}
</script>

<style scoped lang="scss">
  .date-container {
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
  }

  .day-header {
    font-size: 20px;
    font-weight: bold;
  }

  .my-day {
    border: 2px solid #417977;
    padding: 22px;
  }

  .sleep {
    font-weight: bold;
  }
</style>
