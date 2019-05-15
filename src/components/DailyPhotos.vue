<template>
  <div class="daily-images">
    <div v-for="photo in photos" v-bind:key="photo.id">
      <img class="daily-image" v-bind:src="photo.img_src" v-bind:alt="photo.album_name">
    </div>
  </div>
</template>

<script>
const MYKID_COOKIE = "mykid";

export default {
  name: "DailyPhotos",
  props: {
    photos: Array
  }
}
</script>

<style scoped lang="scss">

  .daily-images {
    display: flex;
    flex: 1 1 100%;
    flex-wrap: wrap;
  }

  .daily-image {
    padding: 12px;
    height: 300px;
    width: 300px;

    @media (max-width: $mobile-size) {
      height: 200px;
      width: 200px;
    }
  }
</style>

