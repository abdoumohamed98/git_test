let count = 0;
let countEl = document.getElementById("count-el")

function increment() {
    count++
    countEl.textContent = count
}

let saveVar = document.getElementById("save-btn")

function save() {
    saveVar.textContent = "Saved"
    console.log(countEl.innerText)
}