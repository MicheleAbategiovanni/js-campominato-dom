const btnPlayEl = document.querySelector("button");
const gridContainerEl = document.querySelector(".container");

const selectLevelEl = document.querySelector("#difficultyLevel");

let celleNoBombs = +selectLevelEl.value - 16;


let bombs;
let bombaTrovata = 0;
let contatorePunteggio = 0;
let contatorePerso = 0;



btnPlayEl.addEventListener("click", function () {

    const difficultyEl = selectLevelEl.value;

    bombs = generateBombsList(+difficultyEl);
    generateCells(gridContainerEl, difficultyEl);

});
