export default {
    state: {
        token: null,
        user: '',
    },
    mutations: {
        login(state, token) {
            state.token = token;
        },
    },
    actions: {
        loginByUser({commit}, token) {
            commit('login', token);
        }
    },
}