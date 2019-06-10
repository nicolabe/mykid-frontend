<template>
  <div>
    <div class="postit-container">
      <div
        v-for="postit in postits"
        :key="postit.id"
        v-on:click="selectPostit(postit)"
        class="postit"
      >
        <div class="title">{{postit.date_formatted}}</div>
        <div class="content">{{postit.innhold.replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/g, " ")}}</div>
      </div>
    </div>
    <Modal
      v-bind:item="selectedPostit"
      v-bind:title="selectedPostit ? selectedPostit.date_formatted : ''"
      v-on:hideModal="hideModal"
    >{{formattedPostitContent}}</Modal>
  </div>
</template>

<script>
import Modal from "./Modal";

export default {
  name: "Postits",
  components: {
    Modal
  },
  props: {
    postits: Array
  },
  data: function() {
    return {
      selectedPostit: {}
    };
  },
  methods: {
    selectPostit(postit) {
      this.selectedPostit = postit;
    },
    hideModal() {
      this.selectedPostit = null;
    }
  },
  computed: {
    formattedPostitContent() {
      if (this.selectedPostit && this.selectedPostit.innhold) {
        return this.selectedPostit.innhold
          .replace(/(<([^>]+)>)/gi, "")
          .replace(/&nbsp;/g, " ");
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.postit-container {
  display: flex;
  flex-direction: row;
  margin-top: 1.5em;
}

.postit {
  background-color: #feffb3;
  border-radius: 2px;
  padding: 2em;
  user-select: none;
  height: 120px;
  width: 240px;

  .content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.postit + .postit {
  margin-left: 2em;
}

.title {
  font-size: 1.2em;
  font-weight: 500;
}
</style>
