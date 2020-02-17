<template>
  <div class="product-listing">
    <div class="button" @click="$emit('updateView', 'address-form')">
      Checkout
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListing",
  props: {
    products: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss"></style>
