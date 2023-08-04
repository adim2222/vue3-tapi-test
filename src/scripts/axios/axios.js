import Axios from "axios";
import store from "../store/store.js";

async function getData() {
    Axios.get("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart")
        .then(function (res) {
            store.dispatch("getData", res)
        })
};

export default getData;