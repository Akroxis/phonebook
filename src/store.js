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
    },
    addNewContact(state, payload) {
      state.personsList.push(payload);
    },
    editContact(state, payload) {
      state.personsList.find(
        el => (el.id = payload._id ? (el = payload) : null)
      );
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
    },
    async ADD_NEW_CONTACT({ commit }, payload) {
      try {
        const answer = await instance.post(
          "http://localhost:3000/contacts",
          payload
        );
        const data = answer.data;
        data && commit("addNewContact", data);
        return data && answer;
      } catch (e) {
        throw new Error(e);
      }
    },
    async EDIT_CONTACT({ commit }, payload) {
      try {
        const answer = await instance.put(
          `http://localhost:3000/contacts?id=${payload.id}`,
          payload
        );
        const data = answer.data;
        data && commit("editContact", data);
        return data && answer;
      } catch (e) {
        throw new Error(e);
      }
    },
    async DELETE_CONTACT({ commit }, payload) {
      try {
        const answer = instance.delete(
          `http://localhost:3000/contacts?id=${payload.id}`
        );
        answer && commit("removeContact", payload);
        return answer && answer;
      } catch (e) {
        throw new Error(e);
      }
    },
    async GET_TEXT_FILE() {
      try {
        const answer = await instance.get(
          "http://localhost:3000/contacts?textfile=true"
        );
        const data = answer.data;
        console.log(data);
        return data && answer;
      } catch (e) {
        throw new Error(e);
      }
    }
  }
});
