<template>
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    <h2>¡Aqui podrá encontrar todo nuestro menú!</h2>
    <h3>Sabores de pan</h3>
    <ul>
      <li>Fresa .................................. $100</li>
      <li>Chocolate .................................. $100</li>
      <li>Vainilla .................................. $100</li>
      <li>Cajeta .................................. $120</li>
      <li>Naranja .................................. $120</li>
      <li>Tres Leches .................................. $150</li>
      <li>Combinado (2 sabores) .................................. $180</li>
      <li>Combinado (3+ sabores) .................................. $250</li>
    </ul>
    <h3>Adornos</h3>
    <ul>
      <li>Chispas de chocolate ....................................... $15</li>
      <li>Texto ....................................... $15</li>
      <li>Figuras de betún ....................................... $15</li>
      <li>Fruta ........................................ $35</li>
      <li>Hojuelas de chocolate ....................................... $45</li>
      <li>Imagen personalizada ....................................... $80</li>
      <li>Figurín de plástico ....................................... $120</li>
    </ul>
    <h3>Betún</h3>
    <ul>
      <li>Blanco ....................................... $30</li>
      <li>¡Cualquier color! ....................................... $40</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuMain",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
ul {
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
li {
  margin: 10px;
}
li:before {
  font-family: "FontAwesome";
  content: "\f1fd";
  margin-right: 15px;
}
</style>
