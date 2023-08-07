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
        punchlineToggle (state, value) {
            state.showPunchline = value;
        },
    },
    actions: {
        getData (state, data) {
            state.commit('setData', data);
        },
    },
})

export default store;