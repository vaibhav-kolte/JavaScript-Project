// Functions = A section of reusable code. Declare code once, use it whenever you wnat. Call the function to ececute that code.

function happyBirthday(username, age) {
 console.log("Happy birthday to you!")
 console.log("Happy birthday to you!")
 console.log(`Happy birthday to dear ${username}!`)
 console.log("Happy birthday to you!")
 console.log(`You are ${age} year old`)
}

// happyBirthday('Vaibhav', 25)
// happyBirthday('Pankaj', 27)



// function add(x, y) {
//  let result = x + y
//  return result
// }
// let answer = add(2, 3)
// console.log(answer)



// const add = (x, y) => x + y
// console.log(add(2, 3))



function add(x, y) {
 return x + y
}
function subtract(x, y) {
 return x - y
}
function multiply(x, y) {
 return x * y
}

// console.log(add(2, 3))
// console.log(subtract(2, 3))
// console.log(multiply(2, 3))


function isEven(number) {
 // if (number % 2 === 0) {
 //  return true
 // } else {
 //  return false
 // }


 // shortcut ternary
 // return number % 2 === 0 ? true : false

 // OR simply
 return number % 2 === 0
}

// console.log(isEven(11))


function isValidEmail(email) {
 if (email.includes('@')) {
  return true
 } else {
  return false
 }
}
console.log(isValidEmail('vaibhav04@gmail.com'))
console.log(isValidEmail('vaibhav04.com'))
console.log(isValidEmail('vaibhav04@yahoo.com'))