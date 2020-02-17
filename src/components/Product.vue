<template>
  <div class="product">
    <img :src="product.imageURL" alt="" />
    <div class="product-name">
      {{ product.display_name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    margin-left: 60px;
    margin-right: 60px;
    max-width: 80px;
    max-height: 200px;
  }
}
</style>
