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

// first function determines whether or not a number is a ramp. it turns the number into an array so that it can be looped through. if any succeeding number is higher than the prior number, then failCount will no longer = 0. If it is a ramp #, the function will return 'true'
const isRamp = (num) => {
    let failCount =0
    let numArr = num.toString().split('')  
    for (let i = 0; i < numArr.length; i++) {
      
      if(numArr[i]> numArr[i+1]){
        failCount++
      }
    }
    if(failCount == 0){
    return true
    }
  }
  
  // this function iterates through the given number (in our example 99999), and each iterator is then put into the isRamp function to determine if it is a ramp # or not. If the return of the isRamp comes back as true, we add 1 to the ramp count. 
  const rampCounter = (num) => {
    let iterator = 0
    let rampCount = 0
    while (iterator < num) {
      iterator++
      isRamp(iterator)
      if (isRamp(iterator) === true) {
        rampCount++
      }
    }
  console.log('rampCount is: ' + rampCount)
    return rampCount
  }
  


// -----
// Prompt 3: Count It
// Given a sentence, paragraph or novel, count the letters in the string. Ignore whitespace and anything not [a-z][A-Z], i.e. punctuations and numbers.



