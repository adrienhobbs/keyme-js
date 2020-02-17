<template>
  <div class="pagination-container">
    <div
      class="button previous-page"
      :class="{ disabled: isFirstPage }"
      @click="updatePage(currentPage - 1)"
    >
      Prev
    </div>
    <div class="current-page">{{ currentPage + 1 }} / {{ totalPages }}</div>
    <div
      class="button next-page"
      :class="{ disabled: isLastPage }"
      @click="updatePage(currentPage + 1)"
    >
      Next
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentPage: 0
    };
  },
  methods: {
    updatePage(page) {
      this.currentPage = page;
      this.$emit("pageUpdated", this.currentPage);
      window.scrollTo(null, 0);
    }
  },
  computed: {
    shouldUpdate() {
      return !this.isFirstPage && !this.isLastPage;
    },
    isFirstPage() {
      return !this.currentPage;
    },
    totalPages() {
      return Math.round(this.totalItems / this.itemsPerPage);
    },
    isLastPage() {
      return this.currentPage + 1 === this.totalPages;
    }
  }
};
</script>

<style lang="scss">
.pagination-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 30px;

  .current-page {
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
