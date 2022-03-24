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
          <a href=".\chefPage.html">{{ $store.state.order.type }}</a>
        </td>
        <td>
          <!--Esto abriría una pop up con la imagen adjuntada de referencia o el texto de la descripción del cliente-->
          <a href=".\chefPage.html">Ver descripción</a>
        </td>
        <td>En preparación</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "OrderTable",
};
</script>
