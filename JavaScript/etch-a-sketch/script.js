let container = document.querySelector(".container")
let bgColor = "white"
let color = "black"
let lastColor = color
let isRGB = false
isErase = false
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
            div.style.backgroundColor = bgColor
            container.appendChild(div)
        }
    }

let divs = document.querySelectorAll(".column")

divs.forEach(div => {
    window.addEventListener('keydown', function(e) {
        if(e.keyCode == 69) {
            isRGB = false
            color = "white"
        }
    })

    window.addEventListener('keyup', function(e) {
        if(e.keyCode == 69) {
            color = "black"
        }
    })

    div.addEventListener('mouseover', (e) => {
        if(isRGB) {
            randomColor()
        }
        div.style.backgroundColor = color
    })
});
}

function reset() {
    cells = prompt("How big do you want the grid to be?", "16")
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }

    drawGrid()
}

window.addEventListener('keydown', function(e) {
    if(e.keyCode == 82 && !e.ctrlKey) {
        reset()
    }
})

function randomColor() {
    lastColor = color
    color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

function rgb() {
    lastMode = "rgb"
    isRGB = !isRGB;
    if(!isRGB) {
        
        color = "black"
    }
}

function erase() {
    isErase = !isErase
    color = "white"
    isRGB = false
    if(!isErase) {
        color = "black"
    }
}

drawGrid()



