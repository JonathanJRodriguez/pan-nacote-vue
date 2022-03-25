<template>
  <div>
    <img src="../assets/cake1.png" />
    <div>
      <h2>Pastel cumpleañero clásico</h2>
      <p>Un pastel con el mensaje de feliz cumpleaños que no falla</p>
    </div>
    <div>
      <h2>Pastel para celebrar</h2>
      <p>Un pastel para celebrar cualquier ocasión</p>
    </div>
    <img src="../assets/cake2.png" />
    <img src="../assets/cake3.png" />
    <div>
      <h2>Pastel de cumpleaños deluxe</h2>
      <p>Un pastel para un cumpleaños inolvidable</p>
    </div>
    <div>
      <h2>Pastel casual</h2>
      <p>Un pastel por el puro antojo</p>
    </div>
    <img src="../assets/cake4.png" />
  </div>
</template>

<script>
export default {
  name: "FastDelivery",
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1500px;
}
div div {
  display: flex;
  /* flex-direction: column; */
  width: 50%;
}
div img {
  width: 50%;
  height: auto;
}
</style>
