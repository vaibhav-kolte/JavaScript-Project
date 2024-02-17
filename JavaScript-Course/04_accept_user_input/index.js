// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML testbox

// let usename
// usename = window.prompt("What's your username?")

// console.log(usename)

let username;
document.getElementById('mySubmit').onclick = function () {
 username = document.getElementById('myText').value;
 console.log(`My username: ${username}`)
 document.getElementById('myUsername').textContent = `Username: ${username}`
}