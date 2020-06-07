<template>
  <div class="container py-4">
    <h3 class="text-center">YouTube Search</h3>

    <SearchBar @keywordChange="onKeywordChange"></SearchBar>

    <h5 class="badge badge-info mt-3">{{ length }} videos found</h5>

    <VideoList :videos="videos"></VideoList>
  </div>
</template>

<script>
import api from "./services/api";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

// let debouncedCall;

export default {
  name: "app",
  components: {
    SearchBar,
    VideoList,
  },
  data: () => ({
    videos: [],
  }),
  computed: {
    length() {
      return this.videos.length;
    },
  },
  methods: {
    // onKeywordChange(keyword) {
    //   if (debouncedCall != null) clearTimeout(debouncedCall);

    //   if (keyword == "") {
    //     this.videos = [];
    //     return;
    //   }

    //   debouncedCall = setTimeout(
    //     () => api.getVideoList(keyword).then((res) => (this.videos = res)),
    //     1000
    //   );
    // },

    async onKeywordChange(keyword) {
      if (keyword == "") {
        this.videos = [];
        return;
      }

      this.videos = await api.getVideoList(keyword);
    },
  },
};
</script>

<style scoped></style>
