<template>
  <div>
    <p>Elige el sabor de tu pan:</p>
    <input
      type="checkbox"
      v-model="checkFlavors"
      :value="$store.state.inventory.flavors[0].name"
    />
    <label for="sabor1">{{ $store.state.inventory.flavors[0].name }}</label
    ><br />
    <input
      type="checkbox"
      v-model="checkFlavors"
      :value="$store.state.inventory.flavors[1].name"
    />
    <label for="sabor1">{{ $store.state.inventory.flavors[1].name }}</label
    ><br />
    <input
      type="checkbox"
      v-model="checkFlavors"
      :value="$store.state.inventory.flavors[2].name"
    />
    <label for="sabor1">{{ $store.state.inventory.flavors[2].name }}</label
    ><br />
    <input
      type="checkbox"
      v-model="checkFlavors"
      :value="$store.state.inventory.flavors[3].name"
    />
    <label for="sabor1">{{ $store.state.inventory.flavors[3].name }}</label
    ><br />
    <input
      type="checkbox"
      v-model="checkFlavors"
      :value="$store.state.inventory.flavors[4].name"
    />
    <label for="sabor1">{{ $store.state.inventory.flavors[4].name }}</label
    ><br />
    <input
      type="checkbox"
      v-model="checkFlavors"
      :value="$store.state.inventory.flavors[5].name"
    />
    <label for="sabor1">{{ $store.state.inventory.flavors[5].name }}</label
    ><br />
  </div>
</template>

<script>
export default {
  name: "FlavorMixer",
  data() {
    return {
      checkFlavors: [],
    };
  },
  watch: {
    checkFlavors: function (val) {
      if (val.length > 0) {
        this.$store.dispatch("checkFlavors", val);
        this.$store.dispatch("flavorPrice", val);
      }
    },
  },
  methods: {},
  computed: {},
};
</script>

<style></style>
