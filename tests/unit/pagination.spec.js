import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Pagination from "@/components/Pagination";

describe("Pagination.vue", () => {
  let wrapper;
  let nextPageBtn;
  let prevPageBtn;

  beforeEach(() => {
    wrapper = shallowMount(Pagination, {
      propsData: {
        totalItems: 34,
        itemsPerPage: 9,
        currentPage: 0
      },
      methods: {
        scrollToTop: () => {}
      }
    });

    nextPageBtn = wrapper.find(".next-page-btn");
    prevPageBtn = wrapper.find(".previous-page-btn");
  });

  it("emits a pageUpdated event with correct page number when the next page button is clicked", () => {
    nextPageBtn.trigger("click");
    expect(wrapper.emitted().pageUpdated[0][0]).to.equal(1);
  });

  it("emits a pageUpdated event with correct page number when the previous page button is clicked", () => {
    wrapper.setProps({ currentPage: 1 });
    prevPageBtn.trigger("click");

    expect(wrapper.emitted().pageUpdated[0][0]).to.equal(0);
  });

  it("disables next button on last page", () => {
    const wrapper = shallowMount(Pagination, {
      propsData: {
        totalItems: 34,
        itemsPerPage: 9,
        currentPage: 3
      }
    });
    const nextPageBtn = wrapper.find(".next-page-btn");

    expect(nextPageBtn.classes("disabled")).to.be.true;
    expect(wrapper.vm.isLastPage).to.be.true;
  });

  it("disables previous button on first page", () => {
    const wrapper = shallowMount(Pagination, {
      propsData: {
        totalItems: 34,
        itemsPerPage: 9,
        currentPage: 0
      }
    });

    const prevPageBtn = wrapper.find(".previous-page-btn");

    expect(prevPageBtn.classes("disabled")).to.be.true;
    expect(wrapper.vm.isFirstPage).to.be.true;
  });
});
