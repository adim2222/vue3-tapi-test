import Axios from "axios";
import store from "../store/store.js";

async function getData() {
    Axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist&type=twopart")
        .then(function (res) {
            store.dispatch("getData", res)
        })
};

export default getData;