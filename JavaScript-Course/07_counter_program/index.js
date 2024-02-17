// COUNTER PROGRAM

const decreaseBtn = document.getElementById('decreaseBtn')
const resetBtn = document.getElementById('resetBtn')
const increaseBtn = document.getElementById('increaseBtn')
const countLable = document.getElementById('countLable')

let count = 0;

increaseBtn.onclick = function () {
 setCount(++count)
}

resetBtn.onclick = function () {
 count = 0
 setCount(count)
}

decreaseBtn.onclick = function () {
 setCount(--count)
}

const setCount = (count) => {
 countLable.textContent = count
}