const square = (num) => num * num
    


const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Mahalia',
    age: 29
}, {
    name: 'Bob',
    age: 56
}, {
    name: 'Sarah',
    age: 37
}
]

/* const under30 = people.filter(function (person) {
    return person.age < 30
}) */

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const match = people.find((person) => person.age === 56)
console.log(match.name)