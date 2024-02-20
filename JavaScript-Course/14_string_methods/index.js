// string methods = allow you to manipulate and work with text (strings)

let myName = "Vaibhav"

console.log(myName.charAt(0))

console.log(myName.indexOf("i"))

console.log(myName.lastIndexOf("a"))

console.log(myName.length)

let userName = "  VaibhavKolte   "

console.log(userName, ".")

console.log(userName.trim(), ".")

console.log(myName.toUpperCase())

console.log(myName.toLowerCase())

console.log(myName.repeat(3))

console.log(userName.startsWith(" "))

if (userName.startsWith(" ")) {
  console.log("Your username can't begin with ' '")
} else {
  console.log(userName)
}

console.log(myName.endsWith(" "))

console.log(myName.includes("S"))

let phoneNumber = "123-456-7890"

console.log(phoneNumber)

phoneNumber = phoneNumber.replaceAll("-","")

console.log(phoneNumber)

console.log(phoneNumber.padStart(15,0))

console.log(phoneNumber.padEnd(12,0))