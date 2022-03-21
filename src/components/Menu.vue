<template>
  <div>
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
      <li>
        Rebanadas de fruta (durazno, fresas, kiwi,
        cerezas)....................................... $35
      </li>
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
