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
$orange: #ff6138;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 768px;
  margin: auto;
  margin-top: 60px;
  padding-left: 30px;
  padding-right: 30px;
  border: 1px solid gray;
  padding-top: 30px;

  .button {
    padding: 5px 15px 5px 15px;
    cursor: pointer;
    border: 1px solid black;
    background-color: $orange;
    color: white;
    border-radius: 20px;
    display: inline-flex;

    &:hover {
      background-color: lighten($orange, 10%);
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.3;
    }
  }
}
</style>
