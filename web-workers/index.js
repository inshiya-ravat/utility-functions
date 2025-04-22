const div = document.getElementById('display-time')
const p = document.getElementById('display-value')
const addButton = document.getElementById('add')
const populateBtton = document.getElementById('time-consuming-work')

const worker =  new Worker("worker.js")

let currentValue = 0
function addOne(){
    currentValue += 1
    p.textContent = currentValue
}
addButton.addEventListener('click',addOne)

function setDivContent(text){
    div.textContent = text
}
function intensiveWork (){
    worker.postMessage("start")
    worker.onmessage = event => setDivContent(event.data)
}
populateBtton.addEventListener('click',intensiveWork)