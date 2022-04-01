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
      flavors: [],
      toppings: [],
      covers: [],
      refImg: "",
      toppingText: "",
      coverColor: "",
      subtotalFlavors: 0,
      subtotalToppings: 0,
      subtotalCovers: 0,
      total: 0,
    },
    premadeCakes: [
      {
        name: "Pastel sabor Rojo",
        price: 175,
        description:
          " Pan sabor fresa con betún color rojo pasión y rebanadas de fresa como adornos.",
      },
      {
        name: "Pastel Vocho tuneado",
        price: 240,
        description:
          " Pan sabor naranja con betún verde chillón y una imagen del vocho tuneado de tus sueños.",
      },
      {
        name: "Pastel Maruchan con coca",
        price: 245,
        description:
          " Pan sabor chocolate con betún blanco y una imagen de tu maruchan favorita con frutas mixtas de adorno.",
      },
      {
        name: "Pastel para celebrar",
        price: 200,
        description: "Un pastel para celebrar cualquier ocasión",
      },
      {
        name: "Pastel cumpleañero clásico",
        price: 200,
        description:
          "Un pastel con el mensaje de feliz cumpleaños que no falla",
      },
      {
        name: "Pastel de cumpleaños deluxe",
        price: 275,
        description: "Un pastel para un cumpleaños inolvidable",
      },
      {
        name: "Pastel casual",
        price: 175,
        description: "Un pastel por el puro antojo",
      },
    ],
    inventory: {
      flavors: [
        {
          name: "Fresa",
          qty: 10,
          price: 100,
          selected: false,
        },
        {
          name: "Chocolate",
          qty: 10,
          price: 100,
          selected: false,
        },
        {
          name: "Vainilla",
          qty: 10,
          price: 100,
          selected: false,
        },
        {
          name: "Cajeta",
          qty: 10,
          price: 100,
          selected: false,
        },
        {
          name: "Naranja",
          qty: 10,
          price: 100,
          selected: false,
        },
        {
          name: "Tres Leches",
          qty: 10,
          price: 120,
          selected: false,
        },
        {
          name: "Combinado 2",
          qty: 10,
          price: 150,
          selected: false,
        },
        {
          name: "Combinado 3",
          qty: 10,
          price: 180,
          selected: false,
        },
      ],
      toppings: [
        {
          name: "Chispas de chocolate",
          qty: 20,
          price: 15,
          selected: false,
        },
        {
          name: "Rebanadas de durazno",
          qty: 35,
          price: 35,
          selected: false,
        },
        {
          name: "Rebanadas de fresa",
          qty: 30,
          price: 35,
          selected: false,
        },
        {
          name: "Rebanadas de kiwi",
          qty: 28,
          price: 35,
          selected: false,
        },
        {
          name: "Rebanadas de cereza",
          qty: 16,
          price: 35,
          selected: false,
        },
        {
          name: "Hojuelas de chocolate",
          qty: 20,
          price: 45,
          selected: false,
        },
        {
          name: "Hojas comestibles",
          qty: 80,
          price: 80,
          selected: false,
        },
        {
          name: "Figurín de plástico",
          qty: 10,
          price: 120,
          selected: false,
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
              selected: false,
            },
            custom: {
              name: "Cualquier color",
              rgb: "",
              price: 40,
              selected: false,
            },
          },
        },
      ],
      foodDyes: [
        {
          name: "Colorante rojo",
          qty: 4,
          units: "litros",
        },
        {
          name: "Colorante azul",
          qty: 4,
          units: "litros",
        },
        {
          name: "Colorante verde",
          qty: 4,
          units: "litros",
        },
      ],
      foodInk: [
        {
          name: "Tinta CMY",
          qty: 10,
          units: "cartuchos",
        },
        {
          name: "Tinta negra",
          qty: 20,
          units: "cartuchos",
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
