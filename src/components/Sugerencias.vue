<template>
  <div>
    <h3>Sugerencias del Pastelero</h3>
    <dl>
      <dt>Pastel sabor Rojo ................................... $175</dt>
      <dd>
        * Pan sabor fresa con betún color rojo pasión y rebanadas de fresa como
        adornos.
      </dd>
      <dt>Pastel Vocho tuneado ................................... $240</dt>
      <dd>
        * Pan sabor naranja con betún verde chillón y una imagen del vocho
        tuneado de tus sueños.
      </dd>
      <dt>Pastel Maruchan con coca ................................... $245</dt>
      <dd>
        * Pan sabor chocolate con betún blanco y una imagen de tu maruchan
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
dl {
  background-color: #8b7169;
  width: 50%;
  border-radius: 15px;
  list-style-type: none;
  margin-left: 30px;
  padding: 15px;
  color: #7be6dc;
  font-weight: bold;
  -webkit-text-stroke: 1px #56a19a;
  text-shadow: 0px 0px 8px black;
}
dd {
  margin: 10px 15px 20px;
}
</style>
