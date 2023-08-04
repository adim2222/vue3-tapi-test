import Axios from "axios";

async function getData() {
    Axios.get("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart")
        .then(function (res) {
            console.log(res);
        })
};

export default getData;