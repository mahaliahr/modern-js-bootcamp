const todo = [{
    text: 'Laundry',
    completed: true
}, {
    text: 'Go to the bank',
    completed: false
}, {
    text: 'Go shopping',
    completed: true 
}, {
    text: 'Tidy room',
    completed: false
}, {
    text: 'Make phone calls',
    completed: false
}]

const deleteTodo = function (todo, todoText) {
    const index = todo.findIndex(function (todo, index){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    todo.splice(index, 1)
}

const getThingsToDo = function (todo) {
    return todo.filter(function (todo) {
        if (todo.completed === false)
        return todo
    })
}

console.log(getThingsToDo(todo))

/* deleteTodo(todo, 'laundry')
console.log(todo) */