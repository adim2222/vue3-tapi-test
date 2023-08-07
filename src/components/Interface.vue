<script setup>
import store from "../scripts/store/store.js"
import getData from "../scripts/axios/axios.js"
import { ref, computed } from "vue";

const newJoke = () => {
    getData();
    store.commit('punchlineToggle');
};
const showPunchline = computed(() => {
    return store.state.showPunchline;
});
</script>

<template>
    <div class="interface-window">
        <div class="setup">
            <Suspense>
                <template #default>
                    {{ store.state.setup }}
                </template>
                <template #fallback>
                    Loading...
                </template>
            </Suspense>
        </div>
        <button @click="store.dispatch('punchlineToggle')" class="reveal-button">?</button>
        <div v-if="showPunchline" class="punchline">{{ store.state.punchline }}</div>
        <button v-if="showPunchline" @click="newJoke" class="next-button">Next joke!</button>
    </div>
</template>  

<style scoped>
.interface-window {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}
.setup {
    text-align: center;
    font-size: 40px;
    margin-bottom: 10px;
    transition: 0.3s;
}

.reveal-button {
    width: 100%;
    font-size: 50px;
    border-radius: 10px;
    opacity: 60%;
    transition: 0.5s;
}.reveal-button:hover{
    opacity: 100%;
}
.next-button {
    margin: 0 auto;
    font-size: 50px;
    animation-name: entry-button;
    animation-duration: 1s;
    animation-delay: 2s;
    animation-fill-mode: both;
    border-radius: 10px;
    width: 350px;
}

.punchline {
    text-align: center;
    font-size: 60px;
    animation-name: entry-text;
    animation-duration: 1s;
    animation-fill-mode: both;
}

@keyframes entry-text {
    0% {
        opacity: 0%;
        transform: translate(0px, 100px);
    }

    100% {
        opacity: 100%;
        transform: translate(0px, 0px);
    }
}
@keyframes entry-button {
    0% {
        opacity: 0%;
        transform: translate(0px, 100px);
    }

    100% {
        opacity: 100%;
        transform: translate(0px, 0px);
    }
}
</style>