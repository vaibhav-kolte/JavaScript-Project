// logical operators = used to combine or manipulate boolean values

// (true or false)
// AND = &&
// OR = ||
// NOT = !

const temp = 40

// if (temp > 0) {
//  console.log("The weather is GOOD")
// } else if (temp <= 30) {
//  console.log("The weather is GOOD")
// } else {
//  console.log("The weather is BAD")
// }

if (temp > 0 && temp <= 30) {
 console.log("The weather is GOOD")
} else {
 console.log("The weather is BAD")
}

const paymentModeOnline = true
const paymentModeOffline = false

if (paymentModeOnline || paymentModeOffline) {
 console.log("You has be to purches something.")
} else {
 console.log("You don't have to be purches anything.")
}

const isSunny = false

if (!isSunny) {
 console.log("It is CLOUDY")
} else {
 console.log("It is SUNNY")
}