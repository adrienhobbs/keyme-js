<template>
  <div id="app" class="container">
    <transition name="fade">
      <div v-show="currentView === 'product-listing'">
        <div
          class="button checkout-btn"
          :class="{ 'is-hidden': !showCheckoutBtn }"
          @click="updateView('address-form')"
        >
          Checkout
        </div>
        <ProductListing
          @updateCart="updateCart"
          @updateView="updateView"
          :cart="cart"
          :products="products"
        />
      </div>
    </transition>
    <transition>
      <AddressForm
        @updateView="updateView"
        @startOver="startOver"
        v-show="currentView === 'address-form'"
      />
    </transition>
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
      currentView: "address-form",
      cart: {}
    };
  },
  computed: {
    showCheckoutBtn() {
      return this.itemsInCart && this.currentView === "product-listing";
    },
    itemsInCart() {
      // currently not removing items from the cart
      // if quantity is changed to 0 - this tests that
      // there is at least one item in the cart
      return Object.values(this.cart).some(qty => qty > 0);
    }
  },
  methods: {
    startOver() {
      this.cart = {};
      this.updateView("product-listing");
    },
    updateView(view) {
      this.currentView = view;
    },
    updateCart({ id, qty }) {
      this.$set(this.cart, id, qty);
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
  border: 1px solid gray;
}

.container {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
}

.is-hidden {
  visibility: hidden;
}

.checkout-btn {
  position: sticky;
  top: 5px;
  right: 0;
  margin-bottom: 10px;
}

.button {
  padding: 5px 15px 5px 15px;
  cursor: pointer;
  border: 1px solid black;
  background-color: $orange;
  color: white;
  border-radius: 5px;
  display: inline-flex;

  &:hover {
    background-color: lighten($orange, 10%);
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.3;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
