function updateValue(value) {
 var text = document.getElementById("equation").innerHTML;
 document.getElementById("equation").innerHTML = text + value;
}
function funOne() {
 updateValue(1)
 funFind()
}
function funTwo() {
 updateValue(2)
 funFind()
}
function funThree() {
 updateValue(3)
 funFind()
}
function funFour() {
 updateValue(4)
 funFind()
}
function funFive() {
 updateValue(5)
 funFind()
}
function funSix() {
 updateValue(6)
 funFind()
}
function funSeven() {
 updateValue(7)
 funFind()
}
function funEight() {
 updateValue(8)
 funFind()
}
function funNine() {
 updateValue(9)
 funFind()
}
function funPlus() {
 var text = document.getElementById("equation").innerHTML;
 let lastChar = text.slice(-1)
 console.log("lastChar : ", lastChar)
 if (text.length > 0) {
  if (['+', '-', '/', '*', '%'].includes(lastChar)) {
   document.getElementById("equation").innerHTML = text.slice(0, -1) + '+';
  } else {
   updateValue("+")
  }
 }
}
function funMinus() {
 var text = document.getElementById("equation").innerHTML;
 let lastChar = text.slice(-1)
 console.log("lastChar : ", lastChar)

 if (['+', '-', '/', '*', '%'].includes(lastChar)) {
  document.getElementById("equation").innerHTML = text.slice(0, -1) + '-';
 } else {
  updateValue("-")
 }
}
function funMultiplication() {
 var text = document.getElementById("equation").innerHTML;
 let lastChar = text.slice(-1)
 console.log("lastChar : ", lastChar)
 if (text.length > 0) {
  if (['+', '-', '/', '*', '%'].includes(lastChar)) {
   document.getElementById("equation").innerHTML = text.slice(0, -1) + '*';
  } else {
   updateValue("*")
  }
 }
}
function funDevide() {
 var text = document.getElementById("equation").innerHTML;
 let lastChar = text.slice(-1)
 console.log("lastChar : ", lastChar)
 if (text.length > 0) {
  if (['+', '-', '/', '*', '%'].includes(lastChar)) {
   document.getElementById("equation").innerHTML = text.slice(0, -1) + '/';
  } else {
   updateValue("/")
  }
 }
}
function funBackspace() {
 let text = document.getElementById("equation").innerHTML;
 document.getElementById("equation").innerHTML = text.slice(0, -1);
 funFind()
 text = document.getElementById("equation").innerHTML;
 let lastChar = text.slice(-1)
 console.log("lastChar : ", lastChar)
 if (text.length > 0) {
  if (['+', '-', '/', '*', '%'].includes(lastChar)) {
   text = text.slice(0, -1);
   let resultUsingEval = eval(text);
   document.getElementById("result").innerHTML = resultUsingEval
  }
 }
}
function funReminder() {
 var text = document.getElementById("equation").innerHTML;
 let lastChar = text.slice(-1)
 console.log("lastChar : ", lastChar)
 if (text.length > 0) {
  if (['+', '-', '/', '*', '%'].includes(lastChar)) {
   document.getElementById("equation").innerHTML = text.slice(0, -1) + '%';
  } else {
   updateValue("%")
  }
 }
}
function funClear() {
 document.getElementById("equation").innerHTML = "";
 document.getElementById("result").innerHTML = "";

}
function fun00() {
 updateValue("00")
 funFind()
}
function funZero() {
 updateValue(0)
 funFind()
}
function funDot() {
 updateValue(".")
}
function funFind() {
 try {
  var text = document.getElementById("equation").innerHTML;
  let resultUsingEval = eval(text);
  document.getElementById("result").innerHTML = resultUsingEval
 } catch (error) {
  // document.getElementById("result").innerHTML = "Error " + error.message
 }
}