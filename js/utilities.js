function generateCells(html, valueselect) {

    const container = document.querySelector(".container");

    container.innerHTML = "";

    for (let i = 1; i <= valueselect; i++) {

        const cellEl = document.createElement("div");
        cellEl.classList.add("cell");

        if (valueselect == "81") {

            cellEl.style.width = "11%";

        } else if (valueselect == "49") {

            cellEl.style.width = "13%";

        }

        cellEl.dataset.numCella = i;
        container.append(cellEl);

        cellEl.addEventListener("click", cellClick);

    }
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cellClick() {
    const numCell = +this.dataset.numCella;

    if (bombs.includes(numCell)) {

        alert("Hai trovato una bomba!!! Game Over!");
        this.classList.add("active", "bomb");

    } else {

        this.classList.toggle("active");

    }
}

function generateBombsList(valueselect) {
    const bombsList = [];

    while (bombsList.length < 16) {
        const num = generateRandomNumber(1, valueselect);

        if (!bombsList.includes(num)) {

            bombsList.push(num);

        }
    }

    return bombsList;
}