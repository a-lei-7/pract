const divScreen = document.querySelector("#screen");
const btnCreatNumber = document.querySelector("#creatNumber");
const btnCallNumber = document.querySelector("#callNumber");
const spanNewNumber = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");

let n = 0;
let queue = []

btnCreatNumber.onclick = () => {
    n += 1;
    queue.push(n)
    spanQueue.innerText = JSON.stringify(queue)
    spanNewNumber.innerText = n;
}

btnCallNumber.onclick = () => {
    if (queue.length === 0) {
        return
    }
    const m = queue.shift()
    divScreen.innerText = `请${m}号上前`
    spanQueue.innerT = JSON.stringify(queue)
}