<template>
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    <h2>¡Aqui podrá encontrar todo nuestro menú!</h2>
    <menu-flavors></menu-flavors>
    <menu-toppings></menu-toppings>
    <menu-covers></menu-covers>
  </div>
</template>

<script>
import MenuFlavors from "@/components/MenuFlavors.vue";
import MenuToppings from "@/components/MenuToppings.vue";
import MenuCovers from "@/components/MenuCovers.vue";
export default {
  name: "MenuMain",
  components: {
    MenuFlavors,
    MenuToppings,
    MenuCovers,
  },
};
</script>
