const container = document.querySelector('#container')
const redText = document.createElement('p')
const blueText = document.createElement('h3')
const content = document.createElement('div')
const contentH3 = document.createElement('h3')
const contentP = document.createElement('p')

redText.classList.add('redText')
redText.textContent = "Hey I'm red!"
redText.style.color = "red"
container.appendChild(redText)

blueText.classList.add('blueText')
blueText.textContent = "I'm a blue h3!"
blueText.style.color = "blue"
container.appendChild(blueText)

content.classList.add('content')
content.style.backgroundColor = "pink"
content.style.border = "solid black"
container.appendChild(content)

contentH3.classList.add('contentH3')
contentH3.textContent = "I'm in a div"
content.appendChild(contentH3)

contentP.classList.add("contentP")
contentP.textContent = "ME TOO!"
content.appendChild(contentP)

//Events
function alertFunction() {
    alert("Hello World")
}

let btn = document.querySelector("#btn")
btn.onclick = alertFunction()

let btn1 = document.querySelector("#btn1");
