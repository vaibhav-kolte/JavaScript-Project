// NUMBER GUESSING GAME

const minNum = 1
const maxNum = 100

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

console.log(`ans: ${answer}`)
let attempts = 0
let guess
let running = true

while (running) {
 guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)

 if (guess !== "") {
  guess = Number(guess)
  if (isNaN(guess) || guess < minNum || guess > maxNum) {
   window.alert("Please enter a valid number.")
  } else {
   attempts++
   if (guess < answer) {
    window.alert("TOO LOW! TRY AGAIN")
   } else if (guess > answer) {
    window.alert("TOO HIGH! TRY AGAIN")
   } else {
    window.alert(`COORECT! The answer was ${answer}. It took you ${attempts} attempts.`)
    running = false
   }
  }
 } else {
  continue
 }

 console.log(typeof guess, guess)
}