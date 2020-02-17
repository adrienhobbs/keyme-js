<template>
  <div id="app">
    <ProductListing
      @updateView="updateView"
      :products="products"
      v-show="currentView === 'product-listing'"
    />
    <AddressForm
      @updateView="updateView"
      v-show="currentView === 'address-form'"
    />
  </div>
</template>

<script>
import ProductListing from "./components/ProductListing";
import AddressForm from "./components/AddressForm";
import products from "../data.json";

export default {
  name: "App",
  components: {
    ProductListing,
    AddressForm
  },
  data() {
    return {
      products,
      currentView: "product-listing",
      cart: {
        products: []
      }
    };
  },
  methods: {
    updateView(view) {
      this.currentView = view;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 800px;
  margin: auto;
  margin-top: 60px;

  .button {
    padding: 10px;
    cursor: pointer;
    border: 1px solid black;
  }
}
</style>
