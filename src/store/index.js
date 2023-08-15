import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  // 변수 관리
  state: {
    movieTitle: "영화목록..입니다.",
    films: [],
  },
  getters: {},
  mutations: {
    setFilms(state, data) {
      state.films = data;
    },
  },
  actions: {
    loadStarwars(context) {
      axios.get("https://swapi.dev/api/films").then((result) => {
        context.commit("setFilms", result.data.results);
      });
    },
  },
  modules: {},
});
