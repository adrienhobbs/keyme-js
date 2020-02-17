import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import ProductListing from "@/components/ProductListing";
// import AddressForm from "@/components/AddressForm";

describe("App.vue", () => {
  it("updates current view when updateView event is emitted.", () => {
    const wrapper = shallowMount(App);
    wrapper.find(ProductListing).vm.$emit("updateView", "address-form");
    expect(wrapper.vm.currentView).to.equal("address-form");
  });
});
