<template>
  <div class="mainFD">
    <div class="cakeInfo">
      <img src="../assets/cake1.png" />
      <div class="content">
        <h2>Pastel cumpleañero clásico</h2>
        <p>Un pastel con el mensaje de feliz cumpleaños que no falla</p>
      </div>
    </div>
    <div class="cakeInfo">
      <div>
        <h2>Pastel para celebrar</h2>
        <p>Un pastel para celebrar cualquier ocasión</p>
      </div>
      <img src="../assets/cake2.png" />
    </div>
    <div class="cakeInfo">
      <img src="../assets/cake3.png" />
      <div>
        <h2>Pastel de cumpleaños deluxe</h2>
        <p>Un pastel para un cumpleaños inolvidable</p>
      </div>
    </div>
    <div class="cakeInfo">
      <div>
        <h2>Pastel casual</h2>
        <p>Un pastel por el puro antojo</p>
      </div>
      <img src="../assets/cake4.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FastDelivery",
};
</script>

<style scoped>
.cakeInfo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 1500px;
  align-items: center;
  padding-left: 40px;
}
.content {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  flex-wrap: nowrap;
  flex: 1;
}
div img {
  width: 50%;
  height: auto;
  flex: 1;
}
p {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16pt;
  color: #893985;
}
</style>
