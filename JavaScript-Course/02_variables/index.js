/* Variable = A container that store a value.
              Behaves as if it as were the value it contains.
*/

// 1. declaration  let x;
// 2. assignment   x= 100;

let x;
x = 100;

// console.log(x)


// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(age);
// console.log(price);
// console.log(gpa);

// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is: ${gpa}`);


let firstName = "Vaibhav";
let favoriteFood = "vada pav"
let emial = 'vaibhav@gmail.com'

// console.log(typeof firstName)
// console.log(`Your name is ${firstName}`);
// console.log(`You like ${favoriteFood}`);
// console.log(`Your email is ${emial}`)

let online = true;
let forSale = false
let isStudent = true

// console.log(typeof online)
// console.log(`Bro is online: ${online}`)
// console.log(`Is this car for sale: ${forSale}`)
// console.log(`Enrolled: ${isStudent}`)

let fullName = 'Vaibhav Kolte'
let age = 25
let student = false

document.getElementById('p1').textContent = `Your name is ${fullName}.`
document.getElementById('p2').textContent = `You are ${age} years old.`
document.getElementById('p3').textContent = `Enrolled: ${student}`