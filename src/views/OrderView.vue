<template>
  <div class="order">
    <HeaderMain />
    <FooterMain />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterMain from "@/components/Footer.vue";
import HeaderMain from "@/components/Header.vue";

export default {
  name: "OrderView",
  components: {
    FooterMain,
    HeaderMain,
  },
};
</script>
