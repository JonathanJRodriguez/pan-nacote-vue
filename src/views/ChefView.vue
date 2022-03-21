<template>
  <div class="chef">
    <HeaderMain />
    <FooterMain />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterMain from "@/components/Footer.vue";
import HeaderMain from "@/components/Header.vue";

export default {
  name: "ChefView",
  components: {
    FooterMain,
    HeaderMain,
  },
};
</script>
