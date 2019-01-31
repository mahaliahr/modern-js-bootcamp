// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge area 

let convertor = function (temp) {
    let celsius = (temp - 32) / 1.8
    return celsius
}

let conversionOne = convertor(32)
let conversionTwo = convertor(68)

console.log(conversionOne)
console.log(conversionTwo)