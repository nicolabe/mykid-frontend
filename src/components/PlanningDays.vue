<template>
  <div class="alert alert-info planning-days" role="alert">
      <h3 class="alert-header">Husk planleggingsdager!</h3>
      {{formatPlanningDay}}
  </div>
</template>

<script>
import { formatDate } from "../utils/helpers"

export default {
  props: {
    days: Array
  },
  computed: {
    formatPlanningDay() {
      return this.days.map(day => formatDate(day)).join(", ")
    }
  }
}
</script>

<style scoped lang="scss">
  .planning-days {
    font-weight: bold;
  }

  .alert-header {
    font-size: 22px;
  }
</style>


