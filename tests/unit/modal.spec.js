import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Modal from "@/components/Modal";

describe("Modal.vue", () => {
  it("renders when passing a visible prop as true", () => {
    const wrapper = shallowMount(Modal, {
      propsData: {
        visible: true
      }
    });
    expect(wrapper.isEmpty()).to.be.false;
  });

  it("does not render when passing a visible prop as false", () => {
    const wrapper = shallowMount(Modal, {
      propsData: {
        visible: false
      }
    });
    expect(wrapper.isEmpty()).to.be.true;
  });
});
