let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.pageCountSummary)

// Challenge area

/* let fahrenheit = 32

let celsius = (fahrenheit - 32) / 1.8
console.log(celsius)

let kelvin = (fahrenheit + 459.67) * 5/9
console.log(kelvin) */

let tempConvertor = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit -32) / (1.8),
        kelvin: (fahrenheit + 459.67) * (5/9)
    }
}

let temp = tempConvertor(67)
console.log(temp)

