import { createStore } from "vuex";

const store = createStore({
    state () {
        return {
            setup: "",
            punchline: "",
        }
    },
    mutations: {
        setData (state, data) {
            state.setup = data.data.setup;
            state.punchline = data.data.delivery;
        },
    },
    actions: {
        getData (state, data) {
            state.commit('setData', data);
        },
    },
})

export default store;