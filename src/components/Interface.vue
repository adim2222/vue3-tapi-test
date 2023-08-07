<script setup>
import store from "../scripts/store/store.js"
import getData from "../scripts/axios/axios.js"

const newJoke = () => {
    getData();
    store.dispatch('punchlineToggle');
};
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
        <div v-if="store.state.showPunchline" class="punchline">{{ store.state.punchline }}</div>
        <button v-if="store.state.showPunchline" @click="newJoke" class="next-button">Next joke!</button>
    </div>
</template>  

<style scoped>
.interface-window {
    max-width: 700px;
    margin: 0 auto;
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
}
.next-button {
    width: 100%;
    font-size: 50px;
    animation-name: entry;
    animation-duration: 1s;
    animation-delay: 2s;
    animation-fill-mode: both;
}

.punchline {
    text-align: center;
    font-size: 60px;
    animation-name: entry;
    animation-duration: 1s;
}

@keyframes entry {
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