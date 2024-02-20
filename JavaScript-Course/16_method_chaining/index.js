// Method chaining = Calling one method after another is one continuous line of code.

let userName = window.prompt("Enter your username:")

// --------------- NO METHOD CHAINING -----------------


// userName = userName.trim()
// let letter = userName.charAt(0)
// letter = letter.toUpperCase()


// let extrachars = userName.slice(1)
// extrachars = extrachars.toLowerCase()
// userName = letter + extrachars
// console.log(userName)

// --------------- METHOD CHAINING -----------------

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase()
console.log(userName)