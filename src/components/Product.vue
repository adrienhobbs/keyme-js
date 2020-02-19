<template>
  <div class="product">
    <img :src="product.imageURL" />
    <div class="product-info">
      <div class="product-name">
        {{ product.display_name }}
      </div>
      <div class="product-price">
        {{ product.cost }}
      </div>
      <div
        class="add-to-cart button"
        v-if="!qtyInCart"
        @click="$emit('updateCart', { id: product.id, qty: 1 })"
      >
        Add To Cart
      </div>
      <div v-else class="quantity-buttons">
        <div
          class="button quantity-button decrement"
          @click="updateCart(qtyInCart - 1)"
        >
          -
        </div>
        <div class="quantity-in-cart">{{ qtyInCart }}</div>
        <div
          class="button quantity-button increment"
          @click="updateCart(qtyInCart + 1)"
        >
          +
        </div>
      </div>
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
    },
    qtyInCart: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateCart(qty) {
      this.$emit("updateCart", { id: this.product.id, qty: qty });
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

  .product-price {
    color: gray;
  }

  img {
    max-width: 80px;
    max-height: 200px;
  }

  .quantity-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .quantity-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 0;
  }

  .quantity-in-cart {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
