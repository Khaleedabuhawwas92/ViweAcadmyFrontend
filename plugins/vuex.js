import { createStore } from "vuex";
const store = createStore({
   state() {
      return {
         count: 1000,
         email: String,
         mycours: Array,
         name: String,
         printersList: [],
         haloo: "",
         isSuperAdmain: Boolean,
      };
   },
   getters: {
      getUserInfo: (state) => {
         return state.printersList;
      },
      getMyCourses: (state) => {
         return state.mycours;
      },
      getEmail: (state) => {
         return state.email;
      },

      isAuthenticated(state) {
         return state.isSuperAdmain;
      },

      loggedInUser(state) {
         return state.auth.user;
      },
      toggleOne(state) {
         return state.toggleOne;
      },
   },
   actions: {
      yourAction: ({ commit }, payload) => {
         commit("SET_MENU", payload);
      },
   },

   mutations: {
      SET_MENU(state, user) {
         state.email = user.email;
         state.name = user.name;
         state.isSuperAdmain = user.isSuperAdmain;
         state.mycours = user.myCourses;
         // var arrayLength = user.myCourses.length;

         // state.name = user.name;
      },
   },
});

export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.use(store);
   // Install the store instance as a plugin
});
