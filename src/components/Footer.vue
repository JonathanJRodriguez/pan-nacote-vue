<template>
  <footer>
    <p>Pan Nacote Pastelerías.</p>
    <p>Horarios de atención: Martes a Domingo de 10 A.M. a 8 P.M.</p>
    <p>Teléfono:5512534567</p>
    <p>
      Dirección: Dr. Barragán 188, Doctores, Cuauhtémoc, 06720 Ciudad de México,
      CDMX
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterMain",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
