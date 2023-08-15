<template>
  <StarwarsMainTitle />
  <StarwarsMainList />
  {{ PIE }}
</template>

<script>
import StarwarsMainList from "./StarwarsMainList.vue";
import StarwarsMainTitle from "./StarwarsMainTitle.vue";
import movie from "../mixins/movieMixin.js";

export default {
  components: { StarwarsMainTitle, StarwarsMainList },
  mixins: [movie],
};
</script>

<style></style>
