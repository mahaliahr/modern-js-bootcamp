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

// You have 2 todos left - summary in para tag

// add p for each todo above 

const incompleteTodos = todo.filter(function (todo){
    return !todo.completed
})

const todosLeft = document.createElement('h2')
todosLeft.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(todosLeft)

todo.forEach(function (todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})  