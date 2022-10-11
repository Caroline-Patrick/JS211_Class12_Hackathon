// -----
// Prompt 1: Hang Man
// Project Objective - This is a terminal based app. Reveal a letter from a word if a user inputs that letter and it exists in the word. If it doesn't let the user know.

// initializing Arrays
let playerWord = '-----'.split('')
let hiddenWord = 'HELLO'.split('')

// Main funciton
const hangmanFunc = (guess) => {
    let runCount = 0
    for (let index = 0; index < hiddenWord.length; index++) {
        if(guess.toUpperCase() == hiddenWord[index]){
            playerWord[index] = guess.toUpperCase()
            runCount++
        } else if(runCount != 0){
            document.getElementById("warning").innerHTML = ""
        } else {
            document.getElementById("warning").innerHTML = "Guess harder"
    }
    document.getElementById("output").innerHTML = playerWord
    document.getElementById("hangman").value = ""
}}



// -----
// Prompt 2: Ramp Numbers
// A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number and so is 1124 and 13569. But 1032 is not and neither is 1528.

// Challenge: Given the input of a number, build a program that will find the total number of ramp numbers that are less than it.

const rampCounter = (x) => {
    let controlNumber = 1;
    let answer = 0;
    while (controlNumber <= x) {
        if (isRamp(controlNumber)) {
            answer++
        }
        controlNumber++         
    }
    console.log(answer)
}

const isRamp = (y) => {
    let numArray = y.toString().split('')
    let failCount = 0
    for (let index = 0; index < numArray.length; index++) {
        if (numArray[index+1] < numArray[index]){
        failCount++
    }
    }
    if(failCount == 0){
        return true
    }
}

rampCounter(99999)



// -----
// Prompt 3: Count It
// Given a sentence, paragraph or novel, count the letters in the string. Ignore whitespace and anything not [a-z][A-Z], i.e. punctuations and numbers.



