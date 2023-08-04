import { createStore } from "vuex";

export default store = createStore({
    state () {
        return {
            setup: "",
            punchline: "",
        }
    },
    mutations: {
        setData (state, data) {
            state.setup = data.setup;
            state.punchline = data.punchl;
        },
    },
    actions: {
        getData (state, data) {
            state.commit('setData', data);
        },
    },
})