let name = 'Mahalia'

// Length property
console.log(name.length)

// Convert to uppercase
console.log(name.toUpperCase())

// Convert to lowercase

console.log(name.toLowerCase())

// Includes method
let password = 'abc123gfdgs098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

/* let isValidPassword = function (password) {
    if (password.length < 8 || password.includes('password')) {
        return false
    } else {
        return true
    }
} */

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')  
}

console.log(isValidPassword('gnfh'))
console.log(isValidPassword('asdfgjtuyhg664'))
console.log(isValidPassword('asdfgjtpassword'))