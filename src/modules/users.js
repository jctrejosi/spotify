import axios from "axios";

export const users = {
  namespaced: true,

  state: {
    token: localStorage.getItem("access_token") || "",
  },

  mutations: {
    get_token(state, newToken) {
      state.token = newToken;
      localStorage.setItem("access_token", newToken);
    },
  },

  actions: {
    async Get_Token({ commit }) {
      var url = "https://accounts.spotify.com/api/token";

      var body = "grant_type=client_credentials";

      var config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            btoa(process.env.VUE_APP_CLIENT + ":" + process.env.VUE_APP_SECRET),
        },
      };

      try {
        const result = await axios.post(url, body, config);
        commit("get_token", result.data.access_token);
      } catch {
        console.log("no access_token");
      }
    },
  },
};
