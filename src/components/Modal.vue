<template>
  <div class="modal" v-if="visible">
    <div class="modal-inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss">
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-inner {
  padding: 30px;
  background-color: white;
}
</style>
