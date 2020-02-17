import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("hides checkout button when cart is empty", () => {
    const wrapper = shallowMount(App, {
      data() {
        return {
          cart: {}
        };
      }
    });
    const checkoutBtn = wrapper.find(".checkout-btn");
    expect(checkoutBtn.classes()).to.contain("is-hidden");
  });
  it("updates current view when updateView is triggered", () => {
    const wrapper = shallowMount(App, {
      data() {
        return {
          cart: {
            "fake-item": 1
          }
        };
      }
    });

    wrapper.find(".checkout-btn").trigger("click");
    expect(wrapper.vm.currentView).to.equal("address-form");
  });

  it("adds and updates items to cart", () => {
    const wrapper = shallowMount(App);
    wrapper.vm.updateCart({ id: "fake-item", qty: 1 });
    expect(wrapper.vm.cart["fake-item"]).to.equal(1);

    wrapper.vm.updateCart({ id: "fake-item", qty: 0 });
    expect(wrapper.vm.cart["fake-item"]).to.equal(0);
  });
});
