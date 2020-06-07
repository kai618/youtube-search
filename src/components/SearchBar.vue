<template>
  <div>
    <!-- y chang (input)="" -->
    <input
      class="form-control"
      placeholder="Keyword..."
      @keydown.enter="onInput"
    />
  </div>
</template>

<script>
export default {
  name: "search-bar",
  methods: {
    onInput(event) {
      const keyword = event.target.value;
      if (keyword == "") return;
      // tương đương @Ouput() và EventEmitter().emit('')
      this.$emit("keywordChange", keyword);
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
