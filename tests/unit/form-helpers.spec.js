import {
  createValidateMinLengthFn,
  validateEmail
} from "../../src/form-helpers";
import { expect } from "chai";

describe("form-helpers.js", () => {
  it("validates a value's length is greater than a min length", () => {
    const validateMinLength = createValidateMinLengthFn(3);
    const validValue = "hello";
    const invalidValue = "h";
    const isValid = validateMinLength(validValue);
    const isInvalid = validateMinLength(invalidValue);

    expect(isValid).to.be.true;
    expect(isInvalid).to.be.false;
  });

  it("validates an email is correctly formatted", () => {
    const validEmail = "test@test.com";
    const invalidEmail = "testtest.com";
    const isValid = validateEmail(validEmail);
    const isInvalid = validateEmail(invalidEmail);

    expect(isValid).to.be.true;
    expect(isInvalid).to.be.false;
  });
});
