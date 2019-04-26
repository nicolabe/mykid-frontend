<template>
  <div class="my-day">
    <h3 class="day-header">Dagen i dag</h3>
    <div class="arrival" v-if="myDay.pickup">
      <p>Hentet: {{myDay.pickup.arrived_at}}</p>
      <p v-if="myDay.pickup.left_at">Levert: {{myDay.pickup.left_at}}</p>

    </div>
    <div v-if="myDay.daily_messages && myDay.daily_messages.length > 0" class="events">
      <p class="sleep">
        Sovet: {{sleepMessage}}
      </p>
        <p>{{dailyMessage}}</p>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style scoped lang="scss">
  .day-header {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 300;
  }

  .my-day {
    border: 2px solid #417977;
    padding: 12px;
  }

  .sleep {
    font-weight: bold;
  }
</style>
