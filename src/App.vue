<template>
  <v-slot:Title />
  <StarwarsHeader>Starwars 에</StarwarsHeader>
  <StarwarsMain />
  <StarwarsFooter />
  <v-slot:List />
</template>

<script>
import StarwarsHeader from "./components/StarwarsHeader.vue";
import StarwarsMain from "./components/StarwarsMain.vue";
import StarwarsFooter from "./components/StarwarsFooter.vue";
export default {
  components: { StarwarsHeader, StarwarsMain, StarwarsFooter },
  name: "App",
};
</script>

<style></style>
