/*
Ternary operator = a shortcut to if{} and else{} statement
                   helps to assign a variable based on a condition
                   condition ? codeIfTrue : codeIfFalse
*/

let age = 21
let message
// if (age >= 18) {
//  message = "You're an adult"
// } else {
//  message = "You're a minor"
// }
message = age >= 18 ? "You'r an adult" : "You're a minor"
console.log(message)


let time = 16
let greeting = time < 12 ? "Good morning!" : "Good afternoon!"
console.log(greeting)

let isStudent = true
let msg = isStudent ? "You are a student" : "You are NOT a student"
console.log(msg)

let purchaseAmount = 125
let discount = purchaseAmount >= 100 ? 10 : 0
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`)