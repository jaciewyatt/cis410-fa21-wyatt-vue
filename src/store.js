import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";

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
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getWebinars({ commit }) {
      axios.get("/webinars").then((aResponse) => {
        console.log("response in /movies", aResponse);
        commit("storeWebinars", aResponse.data);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/contacts/logout", null, {
          headers: { Authorization: `Bearer ${state.token}` },
        })
        .then(() => {
          commit("clearAuthData");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in logging out");
        });
    },
  },
});
