<template>
  <div class="product">
    <img :src="product.imageURL" alt="" />
    <div class="product-info">
      <div class="product-name">
        {{ product.display_name }}
      </div>
      <div class="product-price">
        {{ product.cost }}
      </div>
      <div class="add-to-cart button">Add To Cart</div>
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
  margin-bottom: 30px;
  align-items: center;
  width: 200px;

  .product-name {
    margin-top: 15px;
    max-width: 200px;
  }

  img {
    max-width: 80px;
    max-height: 200px;
  }
}
</style>
