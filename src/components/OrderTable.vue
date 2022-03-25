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
    <GDialog v-model="dialogState1">
      <div class="dialog">
        <h2>Dialog Content 1</h2>

        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </GDialog>
    <GDialog v-model="dialogState2">
      <div class="dialog">
        <h2>Dialog Content 2</h2>

        <p>Lorem ipsum dolor sit amet.</p>
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
/*@import "https://cdn.jsdelivr.net/npm/gitart-vue-dialog@1.2.1/dist/style.css";*/
.dialog {
  padding: 30px 20px;
}

h2 {
  margin: 0 0 20px;
}
</style>
