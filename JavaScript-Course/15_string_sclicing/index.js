// string slicing = Creating a substring from a portion of another string

// string.slice(start, end)
// start = including
// end = excluding

let fullName = "Ram Kolte"

// console.log(fullName.slice(0, 7)) // firstName

// console.log(fullName.slice(8, 13)) // lastName

// console.log(fullName.slice(0, 1)) // firstChar
// console.log(fullName.slice(-1)) // lastChar


const firstName = fullName.slice(0, fullName.indexOf(" "))
const lastName = fullName.slice(fullName.indexOf(" ") + 1)

console.log(firstName)
console.log(lastName)

const email = "vaibhav04@gmail.com"

let userName = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@") + 1)

console.log(`Username: ${userName}`)
console.log(`Extension: ${extension}`)