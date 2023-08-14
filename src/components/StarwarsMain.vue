<template>
  <StarwarsMainTitle :movieTitle="movieTitle" />
  <StarwarsMainList :films="films" />
  {{ PIE }}
</template>

<script>
import axios from "axios";
import StarwarsMainList from "./StarwarsMainList.vue";
import StarwarsMainTitle from "./StarwarsMainTitle.vue";
import movie from "../mixins/movieMixin.js";

export default {
  components: { StarwarsMainTitle, StarwarsMainList },
  mixins: [movie],
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
      movieTitle: "영화목록..입니다.",
    };
  },
};
</script>

<style></style>
