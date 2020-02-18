import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Product from "@/components/Product";
import products from "../../data.json";

const defaultPropsData = { qtyInCart: 0, product: products[0] };

const createNewProductWrapper = propsData =>
  shallowMount(Product, { propsData: { ...defaultPropsData, ...propsData } });

describe("Product.vue", () => {
  it("displays add to cart button, if product hasn't been added to cart", () => {
    const wrapper = createNewProductWrapper();
    expect(wrapper.contains(".add-to-cart")).to.be.true;
  });

  it("displays update quantity buttons, if cart contains product", () => {
    const wrapper = createNewProductWrapper({ qtyInCart: 1 });
    expect(wrapper.contains(".quantity-buttons")).to.be.true;
  });

  it("emits an updateCart event when add to cart is clicked", () => {
    let wrapper = createNewProductWrapper();
    wrapper.find(".add-to-cart").trigger("click");
    expect(wrapper.emitted().updateCart).to.exist;
  });

  it("emits an updateCart event when quantity buttons are clicked", () => {
    let wrapper = createNewProductWrapper({ qtyInCart: 3 });
    const incBtn = wrapper.find(".increment");
    const decBtn = wrapper.find(".decrement");
    incBtn.trigger("click");
    decBtn.trigger("click");

    expect(wrapper.emitted().updateCart.length).to.equal(2);
  });
});
