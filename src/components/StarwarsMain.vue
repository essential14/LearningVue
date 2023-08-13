<template>
  <h3>영화 목록</h3>
  <p>
    <button @click="buttonClicked()">최신 글 가져오기</button>
  </p>
  <ul>
    <li v-for="film in films" :key="film.episode_id">
      에피소드 아이디: {{ film.episode_id }} | 제목: {{ film.title }}
      <p>감독: {{ film.director }}</p>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  created() {
    //자동으로 콜백 되는 함수/화면이 렌더링 되기 전에 수행이 됨
    this.getData(); //항상 this 앞에 붙여주기
  },
  methods: {
    buttonClicked() {},
    async getData() {
      // 비동기적으로 호출
      //다른 곳에서도 호출 가능
      axios.get("https://swapi.dev/api/films").then((result) => {
        this.films = result.data.results;
        // console.log(result.data.results);
      });
    },
  },
  data() {
    return {
      films: [],
    };
  },
};
</script>

<style></style>
