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
