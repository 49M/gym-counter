let pushExercises = 0
let pullExercises = 0
let legExercises = 0
let exerciseCount = pushExercises + pullExercises + legExercises
let first = "Michal"
let last = "Buczek"
console.log(first + ' ' + last)
let previousEntries = document.getElementById("save-el")
let countExercise = document.getElementById("count_exercise")

function increment() {

    exerciseCount += 1
    countExercise.innerText = exerciseCount
}


function save() {
    exerciseCount
    previousEntries.textContent += exerciseCount + " - "
    exerciseCount = 0
    countExercise.textContent = exerciseCount
}



