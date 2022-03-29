<template>
  <div>
    <h3>Betún</h3>
    <ul>
      <li>
        {{ $store.state.inventory.covers[0].color.white.name }}
        .................................. ${{
          $store.state.inventory.covers[0].color.white.price
        }}
      </li>
      <li>
        {{ $store.state.inventory.covers[0].color.custom.name }}
        .................................. ${{
          $store.state.inventory.covers[0].color.custom.price
        }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuCovers",
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
