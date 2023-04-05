import { createStore } from "vuex";
import { state } from "~~/stores/quizeData";
const store = createStore({
   state() {
      return {
         id: String,
         count: 1000,
         email: String,
         mycours: Array,
         noteQuiz: Array,
         name: String,
         printersList: [],
         courses: [],
         Notes: Array,
         phone: String,
         haloo: "",
         isSuperAdmain: Boolean,
      };
   },
   getters: {
      getUserInfo: (state) => {
         return state.printersList;
      },
      getUserName: (state) => {
         return state.name;
      },
      getPhone: (state) => {
         return state.phone;
      },
      getCourses: (state) => {
         return state.courses;
      },
      getNoteQuiz: (state) => {
         return state.Notes;
      },
      getMyCourses: (state) => {
         return state.mycours;
      },
      getEmail: (state) => {
         return state.email;
      },
      getId: (state) => {
         return state.id;
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
      SetCourses: ({ commit }) => {
         $fetch("http://localhost:8000/api/courses", {
            method: "GET",
         })
            .then((res) => {
               console.log(res);
               commit("SET_COURSES", res);
            })
            .catch((eroor) => {
               console.log(eroor);
            });
      },
      SetNotes: ({ commit, state }) => {
         $fetch("http://localhost:8000/api/user/note/" + state.id, {
            method: "GET",
         })
            .then((res) => {
               console.log(res);
               commit("SET_NOTES", res);
            })
            .catch((eroor) => {
               console.log(eroor);
            });
      },
      SetUser: ({ commit }) => {
         $fetch("http://localhost:8000/api/user", {
            method: "GET",
         })
            .then((res) => {
               console.log(res);
               commit("SET_USERS", res);
            })
            .catch((eroor) => {
               console.log(eroor);
            });
      },
   },

   mutations: {
      SET_MENU(state, user) {
         state.email = user.email;
         state.phone = user.phone;
         state.id = user.id;
         state.name = user.name;
         state.isSuperAdmain = user.isSuperAdmain;
         state.mycours = user.myCourses;

         // var arrayLength = user.myCourses.length;
         // state.name = user.name;
      },
      SET_COURSES(state, courses) {
         state.courses = courses;
      },
      SET_NOTES(state, Notes) {
         state.Notes = Notes;
      },
   },
});

export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.use(store);
   // Install the store instance as a plugin
});
