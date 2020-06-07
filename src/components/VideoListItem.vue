<template>
  <li class="list-group-item list-group-item-action">
    <div class="d-flex align-items-center">
      <div class="d-flex align-items-center">
        <img class="rounded" :src="thumbnailURL" />
      </div>
      <div class="p-2">{{ video.snippet.title }}</div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    video: Object,
  },
  computed: {
    thumbnailURL() {
      return this.video.snippet.thumbnails.default.url;
    },
  },
};
</script>

<style scoped>
img {
  margin: auto auto;
  width: 100px;
  object-fit: contain;
}
</style>
