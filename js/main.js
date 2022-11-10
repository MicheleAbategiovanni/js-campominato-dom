const btnPlayEl = document.querySelector("button");
const gridContainerEl = document.querySelector(".container");
let bombs;



btnPlayEl.addEventListener("click", function () {

    const selectLevelEl = document.querySelector("#difficultyLevel");

    const difficultyEl = selectLevelEl.value;

    bombs = generateBombsList(+difficultyEl);

    generateCells(gridContainerEl, difficultyEl);

})



