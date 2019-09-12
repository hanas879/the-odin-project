let container = document.querySelector(".container")
let cells = 16
function drawGrid() {
    for(let row = 1; row <= cells; row++) {
        for(let col = 0; col < cells; col++) {
            let div = document.createElement("div")
            div.classList.add("column")
            div.style.gridColumnStart = col
            div.style.gridColumnEnd = col + 1
            div.style.gridRowStart = row
            div.style.gridRowEnd = row + 1
            div.style.backgroundColor = "white"
            container.appendChild(div)
        }
    }
}

function reset() {
    cells = prompt("How big do you want the grid to be?", "16")
    drawGrid()
}

const divs = document.querySelectorAll(".column")
divs.forEach(div => {
    div.addEventListener('mouseover', (e) => {
        div.style.backgroundColor = "black"
    })
});