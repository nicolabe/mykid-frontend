<template>
  <div>
    Gratulerer {{parent}}, du er logget inn!
    <p>Barnet ditt heter {{child}}</p>
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
  created() {
    console.log(this.parent)
    console.log(this.child)
  }
}
</script>

<style scoped lang="scss">
</style>
