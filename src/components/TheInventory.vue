<template>
  <div>
    <h2>Esto es lo que está disponible actualmente</h2>
    <div>
      <h3>Sabores de pan</h3>
      <table>
        <tr>
          <th>Sabor</th>
          <th>Unidades</th>
        </tr>
        <tr>
          <td>Fresa</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Chocolate</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Vainilla</td>
          <td>8</td>
        </tr>
        <tr>
          <td>Cajeta</td>
          <td>11</td>
        </tr>
        <tr>
          <td>Naranja</td>
          <td>7</td>
        </tr>
        <tr>
          <td>Tres Leches</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div>
      <h3>Adornos</h3>
      <table>
        <tr>
          <th>Descripción</th>
          <th>Porciones</th>
        </tr>
        <tr>
          <td>Chispas de chocolate</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Rebanadas de durazno</td>
          <td>35</td>
        </tr>
        <tr>
          <td>Rebanadas de fresa</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Rebanadas de kiwi</td>
          <td>28</td>
        </tr>
        <tr>
          <td>Rebanadas de cereza</td>
          <td>16</td>
        </tr>
        <tr>
          <td>Hojuelas de chocolate</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Hojas de imagen personalizada</td>
          <td>80</td>
        </tr>
        <tr>
          <td>Figurín de plástico</td>
          <td>10</td>
        </tr>
      </table>
    </div>
    <div>
      <h3>Consumibles</h3>
      <table>
        <tr>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Unidades</th>
        </tr>
        <tr>
          <td>Betún</td>
          <td>10</td>
          <td>Kg</td>
        </tr>
        <tr>
          <td>Colorante azul</td>
          <td>4</td>
          <td>litros</td>
        </tr>
        <tr>
          <td>Colorante rojo</td>
          <td>4</td>
          <td>litros</td>
        </tr>
        <tr>
          <td>Colorante amarillo</td>
          <td>4</td>
          <td>litros</td>
        </tr>
        <tr>
          <td>Tinta impresora CMY</td>
          <td>10</td>
          <td>cartuchos</td>
        </tr>
        <tr>
          <td>Tinta impresora negra</td>
          <td>20</td>
          <td>cartuchos</td>
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
table {
  background-color: rgb(84, 137, 184);
}
</style>
