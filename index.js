'use strict'

const swap = document.getElementById('btn-swapper');

const swapper = () => {
    return document.body.classList.toggle('dark-theme')
}

let checkSwap = swap.onclick = swapper;

console.log(checkSwap);