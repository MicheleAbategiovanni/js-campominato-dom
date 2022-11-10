const btnPlayEl = document.querySelector("button");
const gridContainerEl = document.querySelector(".container");



btnPlayEl.addEventListener("click", function () {

    const selectLevelEl = document.querySelector("#difficultyLevel");

    let difficultyEl = selectLevelEl.value;

    generateCells(gridContainerEl, difficultyEl);

})



