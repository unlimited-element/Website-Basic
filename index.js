'use strict'

var swap = document.getElementById('btn-swapper');

const swapper = () => {

    var nav = document.querySelector("nav");
    var classes = nav.classList;
    if (classes[3] == "navbar-light") {
        document.body.classList.toggle("dark-theme")
        classes.replace("navbar-light", "navbar-dark")
        document.getElementById('btn-swapper').innerText = "Light Theme";
        } else if (classes[3] == "navbar-dark") {
        document.body.classList.toggle("dark-theme");
        classes.replace("navbar-dark", "navbar-light");
        document.getElementById('btn-swapper').innerText = "Dark Theme";
    }

}
const checkSwap = swap.onclick = swapper;
// ----------------------------------
