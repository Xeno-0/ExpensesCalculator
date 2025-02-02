let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function addTen() {
    count += 10;
    countEl.textContent = count
}

function addTwentyFive() {
    count += 25;
    countEl.textContent = count
}

function addHundred() {
    count += 100;
    countEl.textContent = count
}

function addFiveHundred() {
    count += 500;
    countEl.textContent = count
}

function previousExpenses() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}