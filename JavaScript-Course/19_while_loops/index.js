// while loop = repeat some code WHILE some condition is true

// let userName = ""
// while (userName === "" || userName === null) {
//  userName = window.prompt("Enter your username:")
// }
// console.log(`Hello ${userName}`)



// let userName;
// do {
//  userName = window.prompt("Enter your username:")
// } while (userName === "" || userName === null)
// console.log(`Hello ${userName}`)



// let loggedIn = false
// let username
// let password

// while (!loggedIn) {
//  username = window.prompt("Enter your username:")
//  password = window.prompt("Enter your password")
//  if (username === "vaibhav" && password === "vaibhav123") {
//   loggedIn = true
//   console.log("You are logged in!")
//  }else{
//   console.log("Invalid credentials! Please try again")
//  }
// }



let loggedIn = false
let username
let password

do {
 username = window.prompt("Enter your username:")
 password = window.prompt("Enter your password")
 if (username === "vaibhav" && password === "vaibhav123") {
  loggedIn = true
  console.log("You are logged in!")
 } else {
  console.log("Invalid credentials! Please try again")
 }
} while (!loggedIn) 