const todo = ['Laundry', 'Go to the bank', 'Go shopping', 'Tidy room', 'Make phone calls']

todo.splice(2, 1)
todo.push('Exercise')
todo.shift()

console.log(`You have ${todo.length} todos`)
console.log(todo)

todo.forEach(function (item, index) {
    console.log(`${index +1}. ${item}`)
})

/* Covering for loop

for (count = 0; count < todo.length; count++) {
    console.log(`${count + 1}. ${todo[count]}`)
}

*/