<template>
  <div class="product-listing">
    Product Listing

    <div class="button" @click="$emit('updateView', 'address-form')">
      Checkout
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListing"
};
</script>

<style lang="scss"></style>
