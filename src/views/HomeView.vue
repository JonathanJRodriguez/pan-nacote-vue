<template>
  <div class="home">
    <HeaderMain />
    <MenuMain />
    <SugerenciasMain />
    <FooterMain />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterMain from "@/components/Footer.vue";
import HeaderMain from "@/components/Header.vue";
import MenuMain from "@/components/Menu.vue";
import SugerenciasMain from "@/components/Sugerencias.vue";

export default {
  name: "HomeView",
  components: {
    FooterMain,
    HeaderMain,
    MenuMain,
    SugerenciasMain,
  },
};
</script>
