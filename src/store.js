import Vue from "vue";
import Vuex from "vuex";
import instance from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personsList: []
  },
  mutations: {
    setAllContacts(state, payload) {
      state.personsList = payload;
    }
  },
  getters: {
    getCurrentPersonsList(state) {
      return state.personsList;
    }
  },
  actions: {
    async GET_CONTACTS_LIST({ commit }) {
      try {
        const answer = await instance.get("http://localhost:3000/contacts");
        const data = answer.data;
        data && commit("setAllContacts", data);
        return data && answer;
      } catch (e) {
        throw new Error(e);
      }
    }
  }
});
