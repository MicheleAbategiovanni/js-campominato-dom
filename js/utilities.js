function generateCells(html, valueselect) {

    const container = document.querySelector(".container");

    container.innerHTML = "";

    if (valueselect == "100") {

        for (let i = 1; i <= 100; i++) {
            const cellEl = document.createElement("div");
            cellEl.classList.add("cell");
            cellEl.dataset.numCella = i;
            container.append(cellEl);

            cellEl.addEventListener("click", cellClick);

        }

    } else if (valueselect == "81") {

        for (let i = 1; i <= 81; i++) {
            const cellEl = document.createElement("div");
            cellEl.classList.add("cell");
            cellEl.style.width = "11%";
            cellEl.dataset.numCella = i;
            container.append(cellEl);

            cellEl.addEventListener("click", cellClick);
        }

    } else if (valueselect == "49") {

        for (let i = 1; i <= 49; i++) {
            const cellEl = document.createElement("div");
            cellEl.classList.add("cell");
            cellEl.style.width = "13%";
            cellEl.dataset.numCella = i;
            container.append(cellEl);

            cellEl.addEventListener("click", cellClick);
        }

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