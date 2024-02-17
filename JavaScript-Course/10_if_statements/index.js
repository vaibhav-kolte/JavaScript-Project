// If statements = if a condition is true, execute some code if not, doe somethinf else

// let age = 10

// if (age >= 18) {
//  console.log(`You are old enough to enter this site.`)
// } else {
//  console.log(`You must be 18+ to enter this site.`)
// }

// let time = 14;
// if (time < 12) {
//  console.log("Good morning!")
// } else {
//  console.log("Good afternoon!")
// }


// let isStudent = false
// if (isStudent) {
//  console.log("You are a student!")
// } else {
//  console.log("You are not a student!")
// }

// let age = 18
// let hasLicense = true
// if (age >= 16) {
//  console.log("You are old enough to drive")
//  if (hasLicense) {
//   console.log("You have your license!")
//  } else {
//   console.log("You do not have your license yet!")
//  }
// } else {
//  console.log("You must be 16+ to have a license")
// }

const ageText = document.getElementById('myText');
const submitBtn = document.getElementById('mySubmit');
const result = document.getElementById('resultElement');
let age
submitBtn.onclick = function() {
 age = ageText.value
 age = Number(age)
 if (age == 0) {
  result.textContent = "You can't enter. You were just born"
 } else if (age >= 100) {
  result.textContent = "You are TOO OLD to enter this site"
 } else if (age >= 18) {
  result.textContent = "You are old enough to enter this site"
 } else if (age < 0) {
  result.textContent = "Your age can't be blow 0"
 } else {
  result.textContent = "You must be 18+ to enter thhis site"
 }
}
