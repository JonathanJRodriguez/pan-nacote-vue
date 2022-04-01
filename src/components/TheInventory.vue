<template>
  <div>
    <h2>Esto es lo que está disponible actualmente</h2>
    <div class="tableDiv">
      <h3>Sabores de pan</h3>
      <table>
        <tr>
          <th>Sabor</th>
          <th>Unidades</th>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.flavors[0].name }}</td>
          <td>{{ $store.state.inventory.flavors[0].qty }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.flavors[1].name }}</td>
          <td>{{ $store.state.inventory.flavors[1].qty }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.flavors[2].name }}</td>
          <td>{{ $store.state.inventory.flavors[2].qty }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.flavors[3].name }}</td>
          <td>{{ $store.state.inventory.flavors[3].qty }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.flavors[4].name }}</td>
          <td>{{ $store.state.inventory.flavors[4].qty }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.flavors[5].name }}</td>
          <td>{{ $store.state.inventory.flavors[5].qty }}</td>
        </tr>
      </table>
    </div>
    <div class="tableDiv">
      <h3>Adornos</h3>
      <table>
        <tr>
          <th>Descripción</th>
          <th>Porciones</th>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.toppings[0].name }}</td>
          <td>{{ $store.state.inventory.toppings[0].qty }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.toppings[1].name }}</td>
          <td>{{ $store.state.inventory.toppings[1].qty }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.toppings[2].name }}</td>
          <td>{{ $store.state.inventory.toppings[2].qty }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.toppings[3].name }}</td>
          <td>{{ $store.state.inventory.toppings[3].qty }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.toppings[4].name }}</td>
          <td>{{ $store.state.inventory.toppings[4].qty }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.toppings[5].name }}</td>
          <td>{{ $store.state.inventory.toppings[5].qty }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.toppings[6].name }}</td>
          <td>{{ $store.state.inventory.toppings[6].qty }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.toppings[7].name }}</td>
          <td>{{ $store.state.inventory.toppings[7].qty }}</td>
        </tr>
      </table>
    </div>
    <div class="tableDiv">
      <h3>Consumibles</h3>
      <table>
        <tr>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Unidades</th>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.covers[0].name }}</td>
          <td>{{ $store.state.inventory.covers[0].qty }}</td>
          <td>Kg</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.foodDyes[0].name }}</td>
          <td>{{ $store.state.inventory.foodDyes[0].qty }}</td>
          <td>{{ $store.state.inventory.foodDyes[0].units }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.foodDyes[1].name }}</td>
          <td>{{ $store.state.inventory.foodDyes[1].qty }}</td>
          <td>{{ $store.state.inventory.foodDyes[1].units }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.foodDyes[2].name }}</td>
          <td>{{ $store.state.inventory.foodDyes[2].qty }}</td>
          <td>{{ $store.state.inventory.foodDyes[2].units }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.foodInk[0].name }}</td>
          <td>{{ $store.state.inventory.foodInk[0].qty }}</td>
          <td>{{ $store.state.inventory.foodInk[0].units }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.inventory.foodInk[1].name }}</td>
          <td>{{ $store.state.inventory.foodInk[1].qty }}</td>
          <td>{{ $store.state.inventory.foodInk[1].units }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheInventory",
};
</script>

<style scoped>
.tableDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  width: 50%;
  background-color: #8b7169;
  border-radius: 10px;
  border-collapse: collapse;
  color: white;
  font-weight: 500;
  text-align: center;
}

td,
th {
  padding: 6px;
  border: 1px solid #ddd;
}

th {
  font-size: 20px;
}
</style>
