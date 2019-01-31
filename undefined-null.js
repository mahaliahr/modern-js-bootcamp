// Undefined for variable

let name

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}
 
console.log(name)

// Undefined for function arguements 
// Undefined as function return default value 
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

//
let age = 27 

age = null 

console.log(age)