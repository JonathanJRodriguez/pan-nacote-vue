<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/order">Pedido</router-link>
      <router-link to="/chef">Pastelero</router-link>
      <router-link to="/premade">Entrega Inmediata</router-link>
      <router-link to="/about">About</router-link>
      <img src="../assets/logo.png" />
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "TheNavBar",
};
</script>
<style scoped>
nav {
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: #7db8e5;
  align-content: center;
  padding-top: 20px;
  padding-bottom: 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 20px 20px;
  text-decoration: none;
  margin-top: 20px;
  vertical-align: center;
}

nav a.router-link-exact-active {
  color: black;
  background-color: #aee77c;
}

img {
  height: 60px;
  width: auto;
  margin-right: 40px;
  float: right;
  box-shadow: 50%;
}
</style>
