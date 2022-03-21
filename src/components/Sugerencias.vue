<template>
  <div>
    <h3>Sugerencias del Pastelero</h3>
    <dl>
      <dt>Pastel sabor Rojo ................................... $175</dt>
      <dd>
        - Pan sabor fresa con betún color rojo pasión y rebanadas de fresa como
        adornos.
      </dd>
      <dt>Pastel Vocho tuneado ................................... $240</dt>
      <dd>
        - Pan sabor naranja con betún verde chillón y una imagen del vocho
        tuneado de tus sueños.
      </dd>
      <dt>Pastel Maruchan con coca ................................... $245</dt>
      <dd>
        - Pan sabor chocolate con betún blanco y una imagen de tu maruchan
        favorita con frutas mixtas de adorno.
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "SugerenciasMain",
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
