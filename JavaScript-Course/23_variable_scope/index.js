// Variable scope = where a variable is recognized and accessible (local vs global)

let x = 1
// let x = 1 // can't use same variable

function function1() {
 console.log(x) // global variable
 let y = 10
 console.log(y) // local variable
}
function function2() {
 console.log(x)
 let y = 20
 console.log(y)
}
function function3(){
 let x = 2
 console.log(x)
}

function1()
function2()
function3()