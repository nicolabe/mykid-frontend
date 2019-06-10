<template>
  <div class="modal--custom" v-on:click="hideModal" v-bind:class="{ showModal: show }">
    <div role="alert" v-on:click="doNothing" class="modal__wrapper" v-bind:class="{ active: show }">
      <div class="modal__title">
        <h1>{{title}}</h1>
        <span v-on:click="hideModal" class="close">&times;</span>
      </div>
      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    item: Object,
    title: String
  },
  methods: {
    hideModal() {
      this.$emit("hideModal");
    },
    doNothing($event) {
      $event.stopPropagation();
    }
  },
  computed: {
    show() {
      return this.item && !!this.item.id;
    }
  }
};
</script>

<style scoped lang="scss">
.modal {
  &--custom {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
    visibility: hidden;
    opacity: 0;
    transform: scale(1.1);
    z-index: 10;
  }

  &__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 2em 2.5em;
    background-color: white;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    width: 400px;
    z-index: 1;
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1em;

    h1 {
      font-size: 18px;
      margin: 0;
    }

    span {
      line-height: initial !important;
      cursor: pointer;
    }
  }

  &__content {
    text-align: left;
  }
}

.showModal {
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
}
</style>
