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

const sortTodos = function (todo) {
    todo.sort(function (a, b){
        if (b.completed && !a.completed) {
            return -1
        } else if (a.completed && !b.completed) { 
            return 1
        } else
            return 0
    })
} 

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

sortTodos(todo)
console.log(todo)

// console.log(getThingsToDo(todo))

/* deleteTodo(todo, 'laundry')
console.log(todo) */