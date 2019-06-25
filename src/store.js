import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personsList: [
      {
        id: 0,
        name: "Steffen",
        phone: "+7-905-089-29-29"
      },
      {
        id: 1,
        name: "Linus",
        phone: "+7-993-019-21-35"
      },
      {
        id: 2,
        name: "Raphael",
        phone: "+7-999-129-23-21"
      },
      {
        id: 3,
        name: "Sebastian",
        phone: "+7-921-176-26-26"
      }
    ]
  },
  mutations: {},
  getters: {
    getCurrentPersonsList(state) {
      return state.personsList;
    }
  },
  actions: {}
});
