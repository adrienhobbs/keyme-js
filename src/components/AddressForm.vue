<template>
  <div class="address-form">
    Address Form

    <div @click="$emit('updateView', 'product-listing')" class="button">
      Back To Listing
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressForm"
};
</script>

<style lang="scss"></style>
