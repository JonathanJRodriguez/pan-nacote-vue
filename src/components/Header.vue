<template>
  <header>
    <h1>Bienvenido a Pan Nacote Pastelerías</h1>
  </header>
</template>

<script>
export default {
  name: "HeaderMain",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h1 {
  margin-top: 80px;
  color: #ff8cee;
  text-align: center;
  -webkit-text-stroke: 1px #893985;
}
</style>
