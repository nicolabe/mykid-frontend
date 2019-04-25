<template>
  <div class="my-day">
    <div class="arrival" v-if="myDay.pickup">
      <p>Hentet: {{myDay.pickup.arrived_at}}</p>
      <p v-if="myDay.pickup.left_at">Levert: {{myDay.pickup.left_at}}</p>

    </div>
    <div v-if="myDay.daily_messages && myDay.daily_messages.length > 0" class="events">
      {{myDay.daily_messages}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDay',
  props: {
    myDay: Object
  }
}
</script>

<style scoped lang="scss">
  .my-day {
    border: 1px solid #ccc;
    padding: 12px;
  }
</style>
