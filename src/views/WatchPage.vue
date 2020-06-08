<template>
  <div class="embed-responsive embed-responsive-16by9 rounded">
    <iframe
      class="embed-responsive-item"
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  computed: {
    url() {
      return `https://www.youtube.com/embed/${this.$route.params.id}`;
    },
  },
};
</script>
