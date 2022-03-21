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
  background-color: #ffbd89;
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
}
h1 {
  margin-top: 80px;
  color: #ff8cee;
  text-align: center;
  -webkit-text-stroke: 1px #893985;
  text-shadow: 0px 4px 4px #282828;
}
h2 {
  margin-top: 40px;
  margin-left: 20px;
  color: white;
  -webkit-text-stroke: 1px #893985;
  text-shadow: 0px 4px 4px #282828;
}
h3 {
  margin-top: 40px;
  padding-left: 50px;
  color: #ff8cee;
  -webkit-text-stroke: 1px #893985;
  text-shadow: 0px 4px 4px black;
}
</style>
