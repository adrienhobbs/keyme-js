<template>
  <div class="container">
    <div class="address-form">
      <input
        v-for="(field, i) in fields"
        :key="i"
        class="field"
        v-model="field.value"
        :class="{
          valid: field.valid,
          [field.className]: true,
          dirty: field.value,
          invalid: !field.valid
        }"
        :type="field.type"
        :placeholder="field.placeholder"
        @input="validateField(field)"
      />
    </div>
    <div class="form-actions">
      <div
        class="continue-btn button"
        @click="showModal = true"
        :class="{ disabled: !formIsValid }"
      >
        Continue
      </div>
      <div @click="$emit('updateView', 'product-listing')" class="button">
        Edit Cart
      </div>
    </div>
    <Modal :visible="showModal">
      <div>
        <div v-for="(field, i) in fields" :key="i">
          <div v-if="field.value" class="confirmed-field">
            <h3>{{ field.placeholder }}: {{ field.value }}</h3>
          </div>
        </div>
        <div class="form-actions">
          <div @click="startOver()" class="button">
            Start Over
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { createValidateMinLengthFn, validateEmail } from "../form-helpers";
import Modal from "@/components/Modal";

export default {
  name: "AddressForm",
  components: { Modal },
  data() {
    return {
      showModal: false,
      fields: [
        {
          className: "full-name",
          type: "text",
          placeholder: "Full Name",
          required: true,
          value: "",
          valid: false,
          validate: createValidateMinLengthFn(4)
        },
        {
          className: "street-address",
          type: "text",
          placeholder: "Street Address",
          required: true,
          value: "",
          valid: false,
          validate: createValidateMinLengthFn(6)
        },
        {
          className: "apartment",
          type: "text",
          placeholder: "Apt #",
          required: false,
          value: "",
          valid: false,
          validate: createValidateMinLengthFn(0)
        },
        {
          className: "email-address",
          type: "email",
          placeholder: "Email Address",
          required: true,
          value: "",
          valid: false,
          validate: validateEmail
        }
      ]
    };
  },
  computed: {
    requiredFields() {
      return this.fields.filter(field => field.required);
    },
    formIsValid() {
      return this.requiredFields.every(field => field.valid);
    }
  },
  methods: {
    startOver() {
      this.showModal = false;

      // reset field values
      this.fields = this.fields.map(field => ({
        ...field,
        value: "",
        valid: false
      }));

      this.$emit("startOver");
    },
    validateField(field) {
      field.valid = field.validate(field.value);
    }
  }
};
</script>

<style lang="scss">
.address-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .field {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid black;
    font-size: 1.5em;
    flex: auto;

    &.valid.dirty {
      border-color: lightgreen;
    }

    &.invalid.dirty {
      border-color: red;
    }

    @media (min-width: 769px) {
      display: inline-flex;
    }
  }

  .full-name {
    @media (min-width: 769px) {
      width: 100%;
    }
  }

  .apartment {
    @media (min-width: 769px) {
      width: 10%;
      margin-left: 10px;
    }
  }

  .email-address {
    @media (min-width: 769px) {
      width: 100%;
    }
  }

  @media (min-width: 769px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
}

.form-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .button {
    margin-right: 10px;
    display: inline-flex;
  }
}
</style>
