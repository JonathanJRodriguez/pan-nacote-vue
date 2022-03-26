<template>
  <footer>
    <img src="../assets/logo.png" />
    <h2>Pan Nacote Pastelerías.</h2>
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
footer {
  margin-top: 40px;
  width: 100%;
  background-image: linear-gradient(#ffbd89, yellow);
  align-content: center;
  padding-bottom: 40px;
}

h3 {
  margin: 10px 0 0;
}

p {
  color: black;
  font-size: 14pt;
  padding-left: 65px;
}

img {
  height: 60px;
  width: auto;
  margin: 40px;
  float: left;
  box-shadow: 50%;
}
</style>
