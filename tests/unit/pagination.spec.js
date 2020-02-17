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
        itemsPerPage: 9
      },
      methods: {
        scrollToTop: () => {}
      }
    });

    nextPageBtn = wrapper.find(".next-page-btn");
    prevPageBtn = wrapper.find(".previous-page-btn");
  });

  it("displays correct page location", () => {
    nextPageBtn.trigger("click");
    expect(wrapper.vm.currentPage).to.equal(1);
    prevPageBtn.trigger("click");
    expect(wrapper.vm.currentPage).to.equal(0);
  });

  it("emits an pageUpdated event", () => {
    nextPageBtn.trigger("click");
    expect(wrapper.emitted()).to.haveOwnProperty("pageUpdated");
  });

  it("disables next button on last page", () => {
    const wrapper = shallowMount(Pagination, {
      propsData: {
        totalItems: 34,
        itemsPerPage: 9
      },
      data() {
        return {
          currentPage: 3
        };
      }
    });
    const nextPageBtn = wrapper.find(".next-page-btn");

    expect(nextPageBtn.classes("disabled")).to.be.true;
    expect(wrapper.vm.isLastPage).to.be.true;
  });

  it("disables previous button on last page", () => {
    const wrapper = shallowMount(Pagination, {
      propsData: {
        totalItems: 34,
        itemsPerPage: 9
      }
    });
    const prevPageBtn = wrapper.find(".previous-page-btn");

    expect(prevPageBtn.classes("disabled")).to.be.true;
    expect(wrapper.vm.isFirstPage).to.be.true;
  });
});
