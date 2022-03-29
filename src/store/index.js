import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      name: "",
      lname: "",
      email: "",
      phone: "",
    },
    order: {
      type: "",
      chefOption: "",
    },
    inventory: {
      flavors: [
        {
          name: "Fresa",
          qty: 10,
          price: 100,
        },
        {
          name: "Chocolate",
          qty: 10,
          price: 100,
        },
        {
          name: "Vainilla",
          qty: 10,
          price: 100,
        },
        {
          name: "Cajeta",
          qty: 10,
          price: 100,
        },
        {
          name: "Naranja",
          qty: 10,
          price: 100,
        },
        {
          name: "Tres Leches",
          qty: 10,
          price: 120,
        },
        {
          name: "Combinado 2",
          qty: 10,
          price: 150,
        },
        {
          name: "Combinado 3",
          qty: 10,
          price: 180,
        },
      ],
      toppings: [
        {
          name: "Chispas de chocolate",
          qty: 20,
          price: 15,
        },
        {
          name: "Rebanadas de durazno",
          qty: 35,
          price: 35,
        },
        {
          name: "Rebanadas de fresa",
          qty: 30,
          price: 35,
        },
        {
          name: "Rebanadas de kiwi",
          qty: 28,
          price: 35,
        },
        {
          name: "Rebanadas de cereza",
          qty: 16,
          price: 35,
        },
        {
          name: "Hojuelas de chocolate",
          qty: 20,
          price: 45,
        },
        {
          name: "Hojas comestibles",
          qty: 80,
          price: 80,
        },
        {
          name: "Figurín de plástico",
          qty: 10,
          price: 120,
        },
      ],
      covers: [
        {
          name: "Betún",
          qty: 10,
          color: {
            white: {
              name: "Blanco",
              rgb: "255,255,255",
              price: 30,
            },
            custom: {
              name: "Cualquier color",
              rgb: "",
              price: 40,
            },
          },
        },
      ],
    },
  },
  getters: {},
  mutations: {
    nameChange(state, name) {
      state.user.name = name;
    },
    lname(state, lname) {
      state.user.lname = lname;
    },
    email(state, email) {
      state.user.email = email;
    },
    phone(state, phone) {
      state.user.phone = phone;
    },
    orderType(state, orderType) {
      state.order.type = orderType;
    },
    chefOption(state, chefOption) {
      state.order.chefOption = chefOption;
    },
  },
  actions: {
    nameChange({ commit }, name) {
      commit("nameChange", name);
    },
    lname({ commit }, lname) {
      commit("lname", lname);
    },
    email({ commit }, email) {
      commit("email", email);
    },
    phone({ commit }, phone) {
      commit("phone", phone);
    },
    orderType({ commit }, orderType) {
      commit("orderType", orderType);
    },
    chefOption({ commit }, chefOption) {
      commit("chefOption", chefOption);
    },
  },
  modules: {},
});
