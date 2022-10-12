// -----
// Prompt 1: Hang Man
// Project Objective - This is a terminal based app. Reveal a letter from a word if a user inputs that letter and it exists in the word. If it doesn't let the user know.

// initializing Arrays
let playerWord = '-----'.split('')
let hiddenWord = 'HELLO'.split('')
let isGuessCorrect
let isLetterInArray = ""
let previousGuesses = []

// Main funciton
const hangmanFunc = (guess) => {
    let isGuessCorrect = "not yet"
    for (let index = 0; index < hiddenWord.length; index++) {
        let letter = hiddenWord[index];   
        if(guess.toUpperCase() == letter){
            playerWord[index] = guess.toUpperCase()
            isGuessCorrect = "yes"
        }
    }

    isLetterInArray = "not yet"
    for (let index = 0; index < previousGuesses.length; index++) {
        if (previousGuesses[index] == guess.toUpperCase()) {
            isLetterInArray = "yes"
        }
    }
    if (isGuessCorrect == "not yet" && isLetterInArray != "yes") {
        previousGuesses.push(guess.toUpperCase())
    }


    if (isGuessCorrect === "yes") {
        document.getElementById("warning").innerHTML = ""
    } else {
        document.getElementById("warning").innerHTML = "Guess HARDER!"
    }
    document.getElementById("output").innerHTML = playerWord
    document.getElementById("hangman").value = ""
    document.getElementById("previousGuesses").innerHTML = `Previous guesses: ${previousGuesses}`
}


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


function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

  console.log(count("Hello World"))
  console.log(count("Test String"))