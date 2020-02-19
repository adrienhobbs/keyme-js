<template>
  <div id="app" class="container">
    <transition name="fade">
      <div v-show="currentView === 'product-listing'">
        <div
          class="button checkout-btn"
          :class="{ 'is-hidden': !showCheckoutBtn }"
          @click="updateView('address-form')"
        >
          Proceed To Checkout
        </div>
        <ProductListing
          @updateCart="updateCart"
          @updateView="updateView"
          :cart="cart"
          :products="products"
        />
      </div>
    </transition>
    <transition name="fade">
      <AddressForm
        @updateView="updateView"
        @emptyCart="emptyCart"
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
      currentView: "product-listing",
      cart: {}
    };
  },
  computed: {
    // only show the checkout btn if cart contains at least one item
    // and user is on the product listing page
    showCheckoutBtn() {
      return this.itemsInCart && this.currentView === "product-listing";
    },
    itemsInCart() {
      return Object.values(this.cart).some(qty => qty > 0);
    }
  },
  methods: {
    emptyCart() {
      this.cart = {};
    },
    scrollToTop() {
      window.scrollTo(null, 0);
    },
    updateView(view) {
      this.scrollToTop();
      this.currentView = view;
    },
    updateCart({ id, qty }) {
      if (qty) {
        this.$set(this.cart, id, qty);
      } else {
        this.$delete(this.cart, id, qty);
      }
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
  color: #2c3e50;
  max-width: 768px;
  margin: auto;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
  border: 1px solid gray;
  border-radius: 5px;
}

.container {
  padding: 10px 30px 10px 30px;
}

.is-hidden {
  visibility: hidden;
}

.checkout-btn {
  position: sticky;
  top: 5px;
  right: 0;
  margin-bottom: 10px;
  border: 1px solid black;
}

.button {
  display: inline-flex;
  padding: 5px 15px 5px 15px;
  cursor: pointer;
  background-color: $orange;
  color: white;
  border-radius: 5px;

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
