const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let scoreValue = 100
let scoreDecrement = 0
let highScoreValue = 0

// User Guess
const numberGuess = document.getElementById("numberGuess")

const triesLeft = document.querySelector(".triesLeft")
const thePlayerWon = document.querySelector(".playerWon")
const guessInfo = document.querySelector(".guessInfo")

const score = document.querySelector("#score")
const highScore = document.querySelector("#highScore")

let counter = 0
let numberOfTries;
let gameShouldContinue = true
let playerWon = false



let secretAnswer = randomInteger(1, 20)
setEasy()

function setDifficulty(theMaximum, theNumberOfTries) {
  scoreValue = 100
  numberGuess.max = theMaximum
  numberOfTries = theNumberOfTries
  secretAnswer = randomInteger(1, theMaximum)
  console.log(secretAnswer)
  triesLeft.textContent = `Tries: ${numberOfTries}`
  guessInfo.textContent = ''
  gameShouldContinue = true
  scoreDecrement = Math.floor(theMaximum / theNumberOfTries)
}

function setEasy() {
  setDifficulty(20, 10)
}

function setMedium() {
  setDifficulty(50, 7)
}

function setHard() {
  setDifficulty(100, 5)
}



const validateGuess = () => {

  if ( gameShouldContinue ) {
    numberOfTries--
    
    if ( numberGuess.value > secretAnswer ) {
      guessInfo.textContent = "Try lower."
      triesLeft.textContent = `Tries: ${numberOfTries}`
      scoreValue -= scoreDecrement
    } else if ( numberGuess.value < secretAnswer ) {
      guessInfo.textContent = "Try higher."
      triesLeft.textContent = `Tries: ${numberOfTries}`
      scoreValue -= scoreDecrement
    } else {
      guessInfo.textContent = "You got it right."
      triesLeft.textContent = ''
      gameShouldContinue = false
      score.textContent = `${scoreValue}`
      if ( scoreValue > highScoreValue ) {
        highScoreValue = scoreValue
      }
      highScore.textContent = `${highScoreValue}`
    }

    if ( numberOfTries <= 0 ) {
      gameShouldContinue = false
    }
  } else {
    triesLeft.textContent = "Game has ended."
    guessInfo.textContent =  "You have to restart."
  }
}
