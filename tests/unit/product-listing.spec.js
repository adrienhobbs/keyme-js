import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import ProductListing from "@/components/ProductListing";
import products from "../../data.json";

describe("ProductListing.vue", () => {
  let wrapper;

  before(() => {
    wrapper = shallowMount(ProductListing, {
      propsData: {
        products
      }
    });
  });

  it("displays correct number of products at a time.", () => {
    const numProductsDisplayed = 9;

    expect(wrapper.vm.productsToDisplay.length).to.equal(numProductsDisplayed);
  });

  it("updates product list when currentPage property changes.", () => {
    const firstPageProducts = [...wrapper.vm.productsToDisplay];
    wrapper.setData({ currentPage: 1 });
    const secondPageProducts = [...wrapper.vm.productsToDisplay];

    expect(firstPageProducts).to.not.equal(secondPageProducts);
  });

  it("emits an updateView event", () => {
    const button = wrapper.find(".button");
    button.trigger("click");
    expect(wrapper.emitted()).to.haveOwnProperty("updateView");
  });
});
