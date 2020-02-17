<template>
  <div class="pagination-container">
    <div class="button previous-page" @click="prevPage">Prev</div>
    <div class="current-page">{{ currentPage + 1 }}</div>
    <div class="button next-page" @click="nextPage">
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
    nextPage() {
      if (!this.isLastPage) {
        this.currentPage = this.currentPage + 1;
        this.$emit("pageUpdated", this.currentPage);
      }
    },
    prevPage() {
      if (!this.isFirstPage) {
        this.currentPage = this.currentPage - 1;
        this.$emit("pageUpdated", this.currentPage);
      }
    }
  },
  computed: {
    isFirstPage() {
      return !this.currentPage;
    },
    isLastPage() {
      return (
        this.currentPage + 1 === Math.round(this.totalItems / this.itemsPerPage)
      );
    }
  }
};
</script>

<style></style>
