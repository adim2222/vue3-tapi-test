import { createStore } from "vuex";

const store = createStore({
    state () {
        return {
            setup: "",
            punchline: "",
            showPunchline: false,
        }
    },
    mutations: {
        setData (state, data) {
            state.setup = data.data.setup;
            state.punchline = data.data.delivery;
        },
        punchlineToggle (state) {
            state.showPunchline = !state.showPunchline;
        },
    },
    actions: {
        getData (state, data) {
            state.commit('setData', data);
        },
        punchlineToggle (state) {
            state.commit('punchlineToggle');
        },
    },
})

export default store;