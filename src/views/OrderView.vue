<template>
  <div class="order">
    <HeaderMain />
    <FormularioMain />
    <FooterMain />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterMain from "@/components/Footer.vue";
import HeaderMain from "@/components/Header.vue";
import FormularioMain from "@/components/Formulario.vue";

export default {
  name: "OrderView",
  components: {
    FooterMain,
    HeaderMain,
    FormularioMain,
  },
};
</script>
