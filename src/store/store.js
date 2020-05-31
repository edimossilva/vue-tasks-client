// src/store/store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    taskgroup: {}
  },
  mutations: {
    taskgroup(state, taskgroup) {
      state.taskgroup = taskgroup;
    }
  }
});
