alert('A participant has entered the game room. Beginning new session...')

const computerChoiceDisplay = document.getElementById('computer-choice') // const that displays the computer choice
const userChoiceDisplay = document.getElementById('user-choice')         // const that displays the user choice
const resultDisplay = document.getElementById('result')                  // const that displays the end result of whether the user loses or wins
const possibleChoices = document.querySelectorAll("button")              //const for the buttons of game.
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {  //code for all possible choices of the rock, paper, scissors game
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() { // calls the computer choice upon the user selecting either rock, paper, or scissors.
  const randomNumber = Math.floor(Math.random() * 3) + 1 

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {    // function that selects the end result if the user wins or loses
  if (computerChoice === userChoice) {
    alert('DRAW!!!')
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    alert('Congratulations!! You won!!')
    result = 'Victory! You win!'
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'The Computer won! GAMEOVER!'
    alert('Aaaand the computer has won!!! Better luck next time!')
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'Victory! You win!'
    alert('Congratulations!! You won!!')
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'The Computer won! GAMEOVER!'
    alert('Aaaand the computer has won!!! Better luck next time!')
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'Victory! You win!'
    alert('Congratulations!! You won!!')
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'The Computer won! GAMEOVER!!!'
    alert('Aaaand the computer has won!!! Better luck next time!')
  }
  resultDisplay.innerHTML = result
}



