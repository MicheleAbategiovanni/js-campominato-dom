const btnPlayEl = document.querySelector("button");
const gridContainerEl = document.querySelector(".container");

const selectLevelEl = document.querySelector("#difficultyLevel");

const difficultyEl = selectLevelEl.value;

let celleNoBombs = +difficultyEl - 16;
let bombs;
let bombaTrovata = 0;
let contatorePunteggio = 0;
let contatorePerso = 0;



btnPlayEl.addEventListener("click", function () {

    bombs = generateBombsList(+difficultyEl);
    generateCells(gridContainerEl, difficultyEl);

})



