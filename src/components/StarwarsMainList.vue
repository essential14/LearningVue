<template>
  <p>
    <button @click="buttonClicked()">최신 글 가져오기</button>
  </p>
  <ul>
    <li v-for="film in $store.state.films" :key="film.episode_id">
      에피소드 아이디: {{ film.episode_id }} | 제목: {{ film.title }}
      <p>감독: {{ film.director }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("loadStarwars"); //화면이 로딩 될 때 데이터를 가져옴
  },
  methods: {
    buttonClicked() {
      this.$store.dispatch("loadStarwars");
      // this.$store.commit("setFilms", [
      //   {
      //     episode_id: 1,
      //     title: "return of jedi",
      //     director: "george hi",
      //   },
      //   {
      //     episode_id: 2,
      //     title: "return of jedi",
      //     director: "george lee",
      //   },
      // ]);
    },
  },
};
</script>

<style></style>
