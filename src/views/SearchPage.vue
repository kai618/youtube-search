<template>
  <div>
    <SearchBar @keywordChange="onKeywordChange"></SearchBar>

    <h5 v-if="videos" class="badge badge-info mt-3">
      {{ length }} videos found
    </h5>

    <VideoList :videos="videos"></VideoList>
  </div>
</template>

<script>
import api from "./../services/api";
import SearchBar from "./../components/SearchBar";
import VideoList from "./../components/VideoList";

export default {
  name: "app",
  components: {
    SearchBar,
    VideoList,
  },
  data: () => ({
    videos: null,
  }),
  computed: {
    length() {
      let { length } = this.videos;
      if (length == 25) length += "+";
      return length;
    },
  },
  methods: {
    async onKeywordChange(keyword) {
      if (keyword == "") return;
      this.videos = await api.getVideoList(keyword);
    },
  },
};
</script>
