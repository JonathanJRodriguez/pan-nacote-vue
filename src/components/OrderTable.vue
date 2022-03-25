<template>
  <div>
    <h2>Lista de pedidos</h2>
    <table style="width: 100%">
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Telefono</th>
        <th>Email</th>
        <th>Pedido</th>
        <th>Descripción</th>
        <th>Estado</th>
      </tr>
      <tr>
        <td>1</td>
        <td>{{ $store.state.user.name }} {{ $store.state.user.lname }}</td>
        <td>{{ $store.state.user.phone }}</td>
        <td>{{ $store.state.user.email }}</td>
        <td>
          <!--Esto abriría una pop up con la orden completa del cliente-->
          <button @click="dialogState1 = true">Ver detalles</button>
        </td>
        <td>
          <!--Esto abriría una pop up con la imagen adjuntada de referencia o el texto de la descripción del cliente-->
          <button @click="dialogState2 = true">Ver detalles</button>
        </td>
        <td>En preparación</td>
      </tr>
    </table>
    <GDialog v-model="dialogState1" max-width="400px" scrollable>
      <div class="dialog">
        <h2>Detalles del pedido</h2>
        <div class="content">
          <p>Tipo de pedido: Personalizado</p>
          <p>Sabor de pan: Fresa, Chocolate</p>
          <p>Adornos: Fresas, figuras de betún</p>
          <p>Texto personalizado: Feliz cumpleaños</p>
          <p>Color de betún: RGB(0,171,232)</p>
          <div style="background-color: rgb(0, 171, 232)">.</div>
        </div>
      </div>
    </GDialog>
    <GDialog v-model="dialogState2" max-width="800px" scrollable>
      <div class="dialog">
        <h2>Descripción del pedido</h2>
        <div class="content">
          <h3>Descripción del cliente:</h3>
          <p>Quiero un pastel con temática de Frozen como el de la imágen</p>
          <h3>Imagen Adjuntada:</h3>
          <img src="../assets/client1.jpg" width="300" />
        </div>
      </div>
    </GDialog>
  </div>
</template>

<script>
import { GDialog } from "gitart-vue-dialog";
export default {
  components: {
    GDialog,
  },
  name: "OrderTable",
  data: () => ({
    dialogState1: false,
    dialogState2: false,
  }),
};
</script>

<style scoped>
/* @import "https://cdn.jsdelivr.net/npm/gitart-vue-dialog@1.2.1/dist/style.css"; */

.dialog {
  background-color: #ffbd89;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.content {
  border-radius: 10px;
  background-color: white;
  padding: 30px 20px;
  overflow: auto;
  margin-bottom: 30px;
}

h2 {
  margin: 0 0 20px;
}
</style>
