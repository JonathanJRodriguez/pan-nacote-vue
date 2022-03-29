<template>
  <div>
    <h3>Sabores de pan</h3>
    <ul>
      <li>
        {{ $store.state.inventory.flavors[0].name }}
        .................................. ${{
          $store.state.inventory.flavors[0].price
        }}
      </li>
      <li>
        {{ $store.state.inventory.flavors[1].name }}
        .................................. ${{
          $store.state.inventory.flavors[1].price
        }}
      </li>
      <li>
        {{ $store.state.inventory.flavors[2].name }}
        .................................. ${{
          $store.state.inventory.flavors[2].price
        }}
      </li>
      <li>
        {{ $store.state.inventory.flavors[3].name }}
        .................................. ${{
          $store.state.inventory.flavors[3].price
        }}
      </li>
      <li>
        {{ $store.state.inventory.flavors[4].name }}
        .................................. ${{
          $store.state.inventory.flavors[4].price
        }}
      </li>
      <li>
        {{ $store.state.inventory.flavors[5].name }}
        .................................. ${{
          $store.state.inventory.flavors[5].price
        }}
      </li>
      <li>
        {{ $store.state.inventory.flavors[6].name }}
        .................................. ${{
          $store.state.inventory.flavors[6].price
        }}
      </li>
      <li>
        {{ $store.state.inventory.flavors[7].name }}
        .................................. ${{
          $store.state.inventory.flavors[7].price
        }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuFlavors",
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
