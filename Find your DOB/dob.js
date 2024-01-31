const todayDate = new Date();
// const todayDate = new Date(2024, 1, 10)
let todayDay = todayDate.getDate()
let todayMonth = todayDate.getMonth() + 1
let todayYear = todayDate.getFullYear()
// console.log(`Today date : \nYear: ${todayYear} Month: ${todayMonth} Day: ${todayDay}`)

// set your date of birth Note month start from 0
// format Date(year, month, date)
const dob = new Date(1998, 1, 9)
let dobDay = dob.getDate()
let dobMonth = dob.getMonth() + 1
let dobYear = dob.getFullYear()
// console.log(`DOB date : \nYear: ${dobYear} Month: ${dobMonth} Day: ${dobDay}`)

let day = todayDate.getDate() - dob.getDate()
if (day < 0) {
 const month = todayMonth - 1
 dobMonth += 1
 if (month == 4 || month == 6 || month == 9 || month == 11) {
  day += 30
 } else if (month == 2) {
  day += ((todayYear % 4 === 0 && todayYear % 100 !== 0) || todayYear % 400 === 0) ? 29 : 28;
 } else {
  day += 31
 }
}

let month = todayMonth - dobMonth
if (month < 0) {
 dobYear += 1
 month += 12
}

let year = todayYear - dobYear
console.log(`You are now year: ${year}, month: ${month}, day: ${day} old`)