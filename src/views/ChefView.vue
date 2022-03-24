<template>
  <div class="chef">
    <HeaderMain />
    <OrderTable />
    <FooterMain />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterMain from "@/components/Footer.vue";
import HeaderMain from "@/components/Header.vue";
import OrderTable from "@/components/OrderTable.vue";

export default {
  name: "ChefView",
  components: {
    FooterMain,
    HeaderMain,
    OrderTable,
  },
};
</script>
