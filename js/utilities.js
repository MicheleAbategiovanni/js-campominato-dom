function generateCells(html, valueselect) {

    const container = document.querySelector(".container");

    container.innerHTML = "";

    if (valueselect == "1") {

        for (let i = 1; i <= 100; i++) {
            const cellEl = document.createElement("div");
            cellEl.classList.add("cell");
            cellEl.innerHTML = `${i}`;
            container.append(cellEl);

            cellEl.addEventListener("click", function () {

                this.classList.toggle("bg-dark");
                this.classList.toggle("text-danger");

                console.log(`Hai cliccato sulla cella ${i}`);

            })

        }

    } else if (valueselect == "2") {

        for (let i = 1; i <= 81; i++) {
            const cellEl = document.createElement("div");
            cellEl.classList.add("cell");
            cellEl.style.width = "11%";
            cellEl.innerHTML = `${i}`;
            container.append(cellEl);

            cellEl.addEventListener("click", function () {

                this.classList.toggle("bg-dark");
                this.classList.toggle("text-danger");

                console.log(`Hai cliccato sulla cella ${i}`);

            })

        }

    } else if (valueselect == "3") {

        for (let i = 1; i <= 49; i++) {
            const cellEl = document.createElement("div");
            cellEl.classList.add("cell");
            cellEl.style.width = "13%";
            cellEl.innerHTML = `${i}`;
            container.append(cellEl);

            cellEl.addEventListener("click", function () {

                this.classList.toggle("bg-dark");
                this.classList.toggle("text-danger");

                console.log(`Hai cliccato sulla cella ${i}`);

            })

        }

    }

}