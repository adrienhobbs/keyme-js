<template>
  <div class="product-listing">
    <div class="products-container">
      <Product
        v-for="product in productsToDisplay"
        :key="product.key"
        :product="product"
      />
    </div>

    <!-- <div class="button" @click="$emit('updateView', 'address-form')">
      Checkout
    </div> -->
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
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
    justify-content: space-between;
  }
}
</style>
