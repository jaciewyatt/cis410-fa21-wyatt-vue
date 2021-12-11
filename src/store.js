import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    token: null,
    user: null,
    webinars: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeWebinars(state, webinars) {
      state.webinars = webinars;
    },
  },
  actions: {
    getWebinars({ commit }) {
      axios.get("/webinars").then((aResponse) => {
        console.log("response in /movies", aResponse);
        commit("storeWebinars", aResponse.data);
      });
    },
  },
});
