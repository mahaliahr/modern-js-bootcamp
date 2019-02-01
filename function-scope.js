// Global scope (convertor, conversionOne, conversionTwo)
    // Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)

let convertor = function (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8
    
    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}

let conversionOne = convertor(32)
let conversionTwo = convertor(68)

console.log(conversionOne)
console.log(conversionTwo)