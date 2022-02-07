export const views_control = {
  namespaced: true,

  state: {
    showSearch: false,
  },

  mutations: {
    change_show_search(state, show) {
      state.showSearch = show;
    },
  },

  actions: {
    Change_Show_Search({ commit }, show) {
      commit("change_show_search", show);
    },
  },
};
