<template>
  <TheNavBar />
</template>

<script>
import TheNavBar from "../src/components/TheNavbar.vue";
export default {
  name: "App",
  components: {
    TheNavBar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: #7db8e5;
}
body {
  margin: 0;
}
</style>
