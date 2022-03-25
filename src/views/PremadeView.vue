<template>
  <div class="chef">
    <HeaderMain />
    <FastDelivery />
    <FooterMain />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterMain from "@/components/Footer.vue";
import HeaderMain from "@/components/Header.vue";
import FastDelivery from "@/components/FastDelivery.vue";

export default {
  name: "PremadeView",
  components: {
    FooterMain,
    HeaderMain,
    FastDelivery,
  },
};
</script>
