let exerciseCount = 0
let setCount = 0
let previousEntries = document.getElementById("save-el")
let countExercise = document.getElementById("count_exercise")
let countSet = document.getElementById("count_set")
let previousSets = document.getElementById("save-sets")

function increment() {
    exerciseCount += 1
    countExercise.innerText = exerciseCount
}

function save() {
    previousEntries.textContent += exerciseCount + " - "
    exerciseCount = 0
    countExercise.textContent = exerciseCount
}

function increment_set() {
    setCount += 1
    countSet.textContent = setCount
}

function save_set() {
    previousSets.textContent += countSet.textContent + " - "
    setCount = 0
    countSet.textContent = setCount
}



