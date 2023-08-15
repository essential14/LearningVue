<template>
  <h3>{{ $store.state.movieTitle }}</h3>
</template>

<script>
export default {
  type: String,
  default() {
    return "제목없음";
  },
};
</script>

<style></style>
