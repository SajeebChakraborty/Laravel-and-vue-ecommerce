// initial state
const state = () => ({
    user: null,
});

// getters
const getters = {
    isAuthenticated: (state) => !!state.user,
};

// actions
const actions = {
    async login({ commit }, { email, password }) {
        try {
            // const { data } = await axios.post('/api/login', { email, password })
            const data = {
                user: {
                    id: 1,
                    name: "John Doe",
                    email: "test@test.com",
                },
            };
            commit("setUser", data.user);
        } catch (error) {
            console.log(error);
        }
    },
    async logout({ commit }) {
        try {
            // await axios.post("/api/logout");
            commit("setUser", null);
        } catch (error) {
            console.log(error);
        }
    },
};

// mutations
const mutations = {
    setUser(state, user) {
        state.user = user;
    },
};

// exporting
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
