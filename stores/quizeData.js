export const state = () => {
  users: [];
};

export const getters = {
  getMenuList: (state) => {
    return state.menuList;
  },
};
export const actions = {
  async fetchMenu({ commit }) {
    const response = await this.$axios.get('http://localhost:8000/api/items');
    commit('SET_MENU', response.data);
  },
  async fetchPrinters({ commit }) {
    const response = await window.versions.getPrinters();
    commit('SET_MENU_PRINTERS', response);
  },
  async getUsers() {
    const users = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    commit('addUsers', users);
    return users;
  },
  async getToggle(state) {
    const res = { data: 10 };
    state.toggleOne1 = res.data;
    return res.data;
  },
};
export const mutations = {
  addUsers(state, users) {
    state.users.push({ ...users });
  },
};
