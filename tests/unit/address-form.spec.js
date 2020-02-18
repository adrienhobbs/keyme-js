import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import AddressForm from "@/components/AddressForm.vue";

describe("AddressForm.vue", () => {
  let wrapper;
  let ctnBtn;

  beforeEach(() => {
    wrapper = shallowMount(AddressForm);
    ctnBtn = wrapper.find(".continue-btn");
  });

  it("disables the continue button, if form is invalid", () => {
    expect(ctnBtn.classes()).to.contain("disabled");
  });

  it("enables the continue button, if form is valid", () => {
    const wrapper = shallowMount(AddressForm, {
      data() {
        return {
          fields: [
            {
              className: "full-name",
              type: "text",
              placeholder: "Full Name",
              required: true,
              value: "testing",
              valid: true,
              validate: field => {
                field.valid = field.value.length > 4;
              }
            },
            {
              className: "street-address",
              type: "text",
              placeholder: "Street Address",
              required: true,
              value: "1234 3rd Street",
              valid: true,
              validate: field => {
                field.valid = field.value.length > 4;
              }
            }
          ]
        };
      }
    });

    ctnBtn = wrapper.find(".continue-btn");
    expect(ctnBtn.classes()).to.not.contain("disabled");
  });
});
