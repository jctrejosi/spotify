import { createStore } from "vuex";
import { users } from "./modules/users";
import { views_control } from "./modules/views_control";

export default createStore({
  modules: {
    users,
    views_control,
  },
});
