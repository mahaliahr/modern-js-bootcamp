let num = 103.941

console.log(num.toFixed(1))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)

// Challenge


let makeGuess = function (guess) {
    min = 1
    max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}

console.log(makeGuess(3))  