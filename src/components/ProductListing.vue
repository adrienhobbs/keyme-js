<template>
  <div class="product-listing">
    <div class="products-container">
      <Product
        v-for="product in productsToDisplay"
        :qtyInCart="cart[product.id] || 0"
        @updateCart="({ id, qty }) => $emit('updateCart', { id, qty })"
        :key="product.key"
        :product="product"
      />
    </div>

    <Pagination
      @pageUpdated="page => (currentPage = page)"
      :totalItems="products.length"
      :itemsPerPage="productsPerPage"
    />
  </div>
</template>

<script>
import Product from "@/components/Product";
import Pagination from "@/components/Pagination";

export default {
  name: "ProductListing",
  components: {
    Product,
    Pagination
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    cart: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentPage: 0,
      productsPerPage: 9
    };
  },
  computed: {
    productsToDisplay() {
      const startingIndex = this.currentPage * this.productsPerPage;
      return this.products.slice(
        startingIndex,
        startingIndex + this.productsPerPage
      );
    }
  }
};
</script>

<style lang="scss">
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
}
</style>
