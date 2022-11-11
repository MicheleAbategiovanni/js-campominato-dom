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

    if (contatorePerso == 0 && contatorePunteggio < celleNoBombs) {

        if (bombs.includes(numCell)) {

            alert("Hai trovato una bomba!!! Game Over!");

            alert(`Il tuo punteggio è di ${contatorePunteggio} bombe schivate !!`)

            this.classList.add("active", "bomb");

            contatorePerso++;

            return contatorePerso;

        } else {

            this.classList.toggle("active");
            this.classList.toggle("pointer");

            contatorePunteggio++;

            if (contatorePerso == 0 && contatorePunteggio == celleNoBombs) {
                alert("DioNIso");

            }

            return contatorePunteggio;
        }

    } else if (contatorePerso == 1) {

        return;

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