<template>
  <div class="d-flex">
    <!-- giống với [(ngModel)]="" -->
    <input
      class="form-control mr-2"
      placeholder="Keyword..."
      @keydown.enter="onSearch"
      v-model="keyword"
    />
    <button class="btn btn-danger" @click="onSearch">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return { keyword: null };
  },
  methods: {
    onSearch() {
      if (this.keyword == "") return;
      // tương đương @Ouput() và EventEmitter().emit('')
      this.$emit("keywordChange", this.keyword);
    },
  },
};
</script>

// scoped giống với shadow DOM (ViewEncapsulation) của angular
<style scoped>
input {
  width: 100%;
}
</style>
